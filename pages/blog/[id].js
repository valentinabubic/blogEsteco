import Layout from "../../components/layout";
import { getAllBlogIds, getBlogData } from "../../lib/posts";
import { getAuthorsData } from "../../lib/authors";
import Head from "next/head";
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
  let authorsData = [];
  await Promise.all(
    blogData.authorsKey.map(async (author) => {
      authorsData.push(await getAuthorsData(author));
      return authorsData;
    })
  );
  return {
    props: {
      blogData,
      authorsData,
    },
  };
}

export default function Post({ blogData, authorsData }) {
  return (
    <Layout backUrl={`/blog`}>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <article>
        <h1>{blogData.title}</h1>
        <div>
          <Date dateString={blogData.date} />
          {authorsData.map((data, index) => (
            <div key={index}>{data.author}</div>
          ))}

          <br />
          <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
          <p>
            {authorsData.map((data, index) => (
              <div key={index}>
                {
                  <Image
                    src={data.authorAvatar}
                    alt={data.authorAvatar}
                    width={100}
                    height={100}
                    layout="fixed"
                  />
                }

                {
                  <Link href={`/authors/${data.authorsKey[0]}`}>
                    {data.author}
                  </Link>
                }
                {<div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />}
              </div>
            ))}
          </p>
        </div>
      </article>
    </Layout>
  );
}
