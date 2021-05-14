import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../components/layout";
import { getSortedBlogData } from "../../lib/posts";
import PostPreview from "../../components/post-preview";

export async function getStaticProps() {
  const allBlogData = getSortedBlogData();

  return {
    props: {
      allBlogData,
    },
  };
}
export default function Home({ allBlogData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <br></br>

      <section className={utilStyles.headingMd}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allBlogData.map(
              ({ id, date, title, authorsKey, teaser, writtenBy, index}) => (
                <PostPreview
                key={index}
                  id={id}
                  date={date}
                  title={title}
                  authorsKey={authorsKey}
                  writtenBy={writtenBy}
                  teaser={teaser}
                />
              )
            )}
          </ul>
        </section>
      </section>
    </Layout>
  );
}
