import Layout from "../../components/layout";
import { getAllAuthorsIds, getAuthorsData } from "../../lib/authors";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";
import Image from "next/image";
import Link from "next/link";

export default function Authors({ authorsData }) {
  return (
    <Layout>
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
        <ul>
          <li key={authorsData.id}>
            <Link href={`/posts/`}>
              <a>{authorsData.title}</a>
            </Link>
          </li>
        </ul>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllAuthorsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const authorsData = await getAuthorsData(params.id);
  return {
    props: {
      authorsData,
    },
  };
}
