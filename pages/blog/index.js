import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../components/layout";
import Link from "next/link";
import { getSortedBlogData } from "../../lib/posts";
import Date from "../../components/date";
import Image from "next/image";
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
            {allBlogData.map(({ id, date, title, author, contentHtml }) => (
              <PostPreview //faccio il map del componente e gli passo i props? che lui userà per stampare il contenuto
                id={id}
                date={date}
                title={title}
                author={author}
                contentHtml={contentHtml}
              />
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  );
}
