import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilModule from "../../styles/utils.module.css";
import { getSortedBlogData } from "../../lib/posts";
import PostPreview from "../../components/post-preview";
import { getAuthorsData } from "../../lib/authors";

export async function getStaticProps() {
  let allBlogData = getSortedBlogData();
  return {
    props: {
      allBlogData,
    },
  };
}

export default function Home({ allBlogData }) {
  return (
    <Layout home= "true">
      <div className={utilModule.indexpage}>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className="  soul-space-stack-top-l">
          <div className="soul-grid  soul-grid--vertical  soul-grid--fill-height">
            {allBlogData.map(
              ({
                id,
                date,
                title,
                authorsKey,
                teaser,
                writtenBy,
                seoImage,
              }) => (
                <div className="soul-grid-item-auto-span soul-space-stack-bottom-l">
                  <PostPreview
                    key={id}
                    id={id}
                    date={date}
                    title={title}
                    authorsKey={authorsKey}
                    writtenBy={writtenBy}
                    teaser={teaser}
                    seoImage={seoImage}
                  />
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
