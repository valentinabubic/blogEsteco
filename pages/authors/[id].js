import Layout from "../../components/layout";
import { getAllAuthorsIds, getAuthorsData } from "../../lib/authors";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAuthorPosts } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllAuthorsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const authorsData = await getAuthorsData(params.id);
  let authorPosts = [];

  await Promise.all(
    authorsData.authorsKey.map(async (author) => {
      authorPosts = await getAuthorPosts(author);
      return authorPosts;
    })
  );

  return {
    props: {
      authorsData,
      authorPosts,
    },
  };
}

export default function Authors({ authorsData, authorPosts, id }) {
  return (
    <Layout backUrl={`/blog`}>
      <Head>
        <title>{authorsData.author}</title>
      </Head>
      <article>
        <span>
          <div><Image
            src={authorsData.authorAvatar}
            alt={authorsData.authorAvatar}
            width={100}
            height={100}
            layout="fixed"
          />
        </div></span>
        <h2>{authorsData.author}</h2>
        <div dangerouslySetInnerHTML={{ __html: authorsData.contentHtml }} />

        <br></br>
        <h3>Post dell'autore</h3>
        <ul>
          {authorPosts.map((data, index) => (
            <li key={index}>
              <Link href={`/blog/${id}`}>
                <a>{data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <br />
      </article>
    </Layout>
  );
}
