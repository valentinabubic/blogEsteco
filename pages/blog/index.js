import Head from "next/head";
import HomeLayout, { siteTitle } from "../../components/homeLayout";

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
    <HomeLayout>
    <div>
      <Head className="soul-content soul-font-scale-s">
        <title>{siteTitle}</title>
      </Head>
      <br></br>

      <section className="soul-content soul-font-scale-s">
        <div className="soul-grid  soul-grid--horizontal soul-grid--wrap soul-grid--justify-center">
          {allBlogData.map(
            ({
              id,
              date,
              title,
              authorsKey,
              teaser,
              writtenBy,
              seoImage,
              index,
            }) => (
              <div className="soul-grid-item-1/3-span">
                <PostPreview
                  key={index}
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
    </HomeLayout>
  );
}
