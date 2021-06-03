import Layout from "../../components/layout";
import { getAllBlogIds, getBlogData } from "../../lib/posts";
import { getAuthorsData } from "../../lib/authors";
import Head from "next/head";
import Date from "../../components/date";
import Image from "next/image";
import Link from "next/link";
import utilModule from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = await getAllBlogIds();
  
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);
 
  return {
    props: {
      blogData,
      
    },
  };
}

export default function Post({ blogData }) {
  return (
    <Layout backUrl={`/blog`}>
      <Head>
        <title>{blogData.singlePost.title}</title>
      </Head>
      <article className="soul-content">
        {console.log(blogData)}
        <h1>{blogData.singlePost.title}</h1>
        <div>
          <p>{blogData.singlePost.date}</p>
          <div>
            {/* aggiungi autore */}
          </div>

          <div
            className="soul-content soul-space-stack-bottom-l"
            dangerouslySetInnerHTML={{ __html: blogData.singlePost.contentHtml }}
          />

          <div className="soul-grid  soul-grid--horizontal soul-grid--vertical-on-xs soul-grid--comfortable-gap">
            {/* {authorsData.map((data, index) => (
              <a
                href={`/authors/${data.authorsKey[0]}`}
                key={index}
                className={`${utilModule.nodecoration} soul-grid-item-1/2-span`}
              >
                <div className="soul-card soul-card--flat soul-card--regular soul-card--button">
                  <div className="soul-card__header">
                    <div className="soul-card__thumbnail">
                      <div className="soul-avatar  soul-avatar--user  soul-avatar--xl">
                        <div className="soul-avatar__thumbnail">
                          <img
                            className={`${utilModule.nopadding} soul-avatar__image`}
                            src={data.authorAvatar}
                            alt={data.authorAvatar}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="soul-card__header-content soul-font-size-l h-text-bold">
                      {data.author}
                    </div>
                  </div>

                  <div className="soul-card__content">
                    <div className="soul-content soul-font-scale-s">
                      <p>
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
                </div>
              </a>
            ))} */}
          </div>
        </div>
      </article>
    </Layout>
  );
}
