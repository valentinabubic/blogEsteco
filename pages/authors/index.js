import Head from "next/head";
import AuthorsLayout, { siteTitle } from "../../components/authorsLayout";
import Link from "next/link";
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
    <AuthorsLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="">
        {allAuthorsData.map(({ id, author, authorAvatar }) => (
          <div className="soul-grid-item-1/3-span">
            <AuthorsPreview
              id={id}
              authorAvatar={authorAvatar}
              author={author}
            />
          </div>
        ))}
      </section>
    </AuthorsLayout>
  );
}
