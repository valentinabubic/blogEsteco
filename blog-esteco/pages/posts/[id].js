import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Date from "../components/date";
import Image from "next/image";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          <p>{postData.author}</p>
        </div>

        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <p>
          <Image
            src={postData.authorAvatar}
            alt={postData.authorAvatar}
            width={100}
            height={100}
            layout="fixed"
          />
        </p>

        <Link href="/authors" /*as={`/authors/${id}`}*/>{postData.author}</Link>
        <p>{postData.authorBio}</p>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
