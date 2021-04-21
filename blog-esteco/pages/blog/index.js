import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../components/layout";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts.js";
import Date from "../components/date";
import Image from "next/image";
import PostPreview from "../components/post-preview";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <br></br>

      <section className={utilStyles.headingMd}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, author, content }) => (
              <PostPreview //faccio il map del componente e gli passo i props? che lui userà per stampare il contenuto
                id={id}
                date={date}
                title={title}
                author={author}
                content={content}
                
              />
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  );
}
