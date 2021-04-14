import Head from "next/head";
import Layout, { siteTitle } from "./components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "./lib/posts.js";
import Date from './components/date'

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
      
      <section className={utilStyles.headingMd}>
        
      
        
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, author }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                <a>{title}</a>
                </Link>
                <br />
                {id}
                <br />
                <small className={utilStyles.lightText}>
                <Date dateString={date} /> {author}
                </small>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  );
}
