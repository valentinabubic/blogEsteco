import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../components/layout";
import Link from "next/link";
import { getSortedAuthorsData } from "../../lib/authors";

import AuthorsPreview from '../../components/authors-preview';
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
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <br></br>



      <section className={utilStyles.headingMd}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allAuthorsData.map(({ id, author, authorAvatar }) => (
              <AuthorsPreview //faccio il map del componente e gli passo i props? che lui userà per stampare il contenuto
                id={id}
                authorAvatar={authorAvatar}
                author={author}

              />
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  );
}
