import Layout from "../../components/layout";
import { getAllAuthorsIds, getAuthorsData } from "../../lib/authors";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";
import Image from "next/image";
import Link from "next/link";
import {getAuthorPosts} from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllAuthorsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const authorsData = await getAuthorsData(params.id);
  const authorPosts = await getAuthorPosts(authorsData.authorsKey)
  return {
    props: {
      authorsData,
      authorPosts,
    },
  };
}

export default function Authors({ authorsData, authorPosts }) {
  return (
    <Layout backUrl={`/authors`}>
      <Head>
        <title>{authorsData.author}</title>
      </Head>
      <article>
        <p>
          <Image
            src={authorsData.authorAvatar}
            alt={authorsData.authorAvatar}
            width={100}
            height={100}
            layout="fixed"
          />
        </p>
        <h2>{authorsData.author}</h2>
        <div dangerouslySetInnerHTML={{ __html: authorsData.contentHtml }} />

        <br></br>
        <h3>Post dell'autore</h3>
        {authorPosts.map(({data})=>(
          <p>{data.title}</p>
        ))}
      </article>
    </Layout>
  );
}


