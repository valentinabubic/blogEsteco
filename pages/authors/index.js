import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilModule from "../../styles/utils.module.css";
import { getSortedAuthorsData } from "../../lib/authors";
import AuthorsPreview from "../../components/authors-preview";

export async function getStaticProps() {
  const allAuthorsData = getSortedAuthorsData();

  return {
    props: {
      allAuthorsData,
    },
  };
}
export default function Home({ allAuthorsData }) {
  return (
    <Layout>
      <div className={utilModule.indexpage}>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className="soul-space-stack-top-l">
          <div className="soul-grid  soul-grid--vertical  soul-grid--fill-height">
            {allAuthorsData.map(({ id, author, authorAvatar }) => (
              <div className="soul-grid-item-auto-span soul-space-stack-bottom-l">
                <AuthorsPreview
                  id={id}
                  authorAvatar={authorAvatar}
                  author={author}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
