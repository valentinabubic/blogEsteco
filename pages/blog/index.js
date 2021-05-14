import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../components/layout";
import { getSortedBlogData } from "../../lib/posts";
import PostPreview from "../../components/post-preview";
import { getAuthorsData } from "../../lib/authors";

export async function getStaticProps() {
  let rawBlogData = getSortedBlogData(); //prende tutti i post
  let allBlogData = (JSON.parse(JSON.stringify(rawBlogData))) //copia di raw
 
  for(let i=0; i<allBlogData.lenght; i++){
    allBlogData[i].writtenBy = 'ciao';
    let authorsKey = allBlogData[i].authorsKey;
    let authors = []; // chiede il nome di ogni autore
    for(let j=0; j<authorsKey.lenght; j++ ){ //crea un oggetto per ogni autore
      
      let author = {
        authorKey: authorsKey[j],
        // authorData: await getAuthorsData(authorsKey[j]),
      }
      authors.push(author);
    }

    allBlogData[i].authors = authors;
    
  } 
  

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
         {console.log(allBlogData)} 
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
