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
          <br></br>
          <br></br>
          <br></br>
          <p>
            {authorsData.map((data, index) => (
              <div key={index}>
                <div class="soul-grid  soul-grid--horizontal soul-grid--vertical-on-xs">
  <div class="soul-grid-item-1/4-span"><div></div></div>
  <div class="soul-grid-item-1/2-span"><div><div class="soul-card soul-card--flat soul-card--regular">
                  <div class="soul-card__header">
                    <div class="soul-card__header-content">
                      <div class="soul-card__media">
                        <img
                          src={data.authorAvatar}
                          width="20%"
                          alt={data.authorAvatar}
                        />
                      </div>
                      <h1 class="soul-font-size-l h-text-bold h-text-align-center">
                        <Link href={`/authors/${data.authorsKey[0]}`}>
                          {data.author}
                        </Link>
                      </h1>
                    </div>
                  </div>

                  <div class="soul-card__content">
                    <div class="soul-content soul-font-scale-s">
                      <p>
                        {" "}
                        {
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data.contentHtml,
                            }}
                          />
                        }
                      </p>
                    </div>
                  </div>
                </div>  </div></div>
  <div class="soul-grid-item-1/4-span"><div></div></div>

                
                <br></br>
                
              </div></div>
            ))}
          </p>
        </div>
      </article>
    </Layout>
  );
}
