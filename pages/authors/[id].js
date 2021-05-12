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
      authorPosts.push(await getAuthorsData(author));
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
        <li>
          {" "}
          <Link href={`/blog/${id}`}>
              <a>{authorsData.title}</a>
            </Link>
          {/* {authorPosts.map(({ data }) => (
            
          ))} */}
        </li>
        <br />
      </article>
    </Layout>
  );
}
