import Layout from "../../components/layout";
import { getAllBlogIds, getBlogData } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";
import Image from "next/image";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);
 //const authorsData = await getAuthorsData(blogData.authorsKey);
  return {
    props: {
        blogData,
   //     authorsData,
    },
  };
}

export default function Post({ blogData }) {
  return (
    <Layout backUrl={`/blog`}>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{blogData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={blogData.date} />
          <p>{authorsData.author}</p>
        </div>

        <br />
        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
       
        <p>
          <Image
            src={authorsData.authorAvatar}
            alt={authorsData.authorAvatar}
            width={100}
            height={100}
            layout="fixed"
          />
        </p>

        <Link href="/authors" /*as={`/authors/${id}`}*/>{blogData.author}</Link>
        <p>{authorsData.authorBio}</p>
      </article>
    </Layout>
  );
}

