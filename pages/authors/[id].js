import OneAuthorLayout from "../../components/oneAuthorLayout";
import { getAllAuthorsIds, getAuthorsData } from "../../lib/authors";
import Head from "next/head";
import Link from "next/link";
import { getAuthorPosts } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllAuthorsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const authorsData = await getAuthorsData(params.id);
  let authorPosts = [];

  await Promise.all(
    authorsData.authorsKey.map(async (author) => {
      authorPosts = await getAuthorPosts(author);
      return authorPosts;
    })
  );

  return {
    props: {
      authorsData,
      authorPosts,
    },
  };
}

export default function Authors({ authorsData, authorPosts, id }) {
  return (
    <OneAuthorLayout backUrl={`/blog`}>
      <Head>
        <title>{authorsData.author}</title>
      </Head>
      <div class="soul-grid  soul-grid--horizontal">
        <div class="soul-grid-item-1/4-span">
          <div></div>
        </div>
        <div class="soul-grid-item-1/2-span">
          <div>
            <div class="soul-card soul-card--flat soul-card--comfortable">
              <div class="soul-card__header">
                <div class="soul-card__header-content">
                  <div className="soul-card__media">
                    <img src={authorsData.authorAvatar} width="20%" alt="" />
                  </div>
                  <h1 class="soul-font-size-l h-text-bold h-text-align-center">
                    {authorsData.author}
                  </h1>
                </div>
              </div>
              <div class="soul-card__content">
                <div class="soul-content soul-font-scale-l">
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: authorsData.contentHtml,
                      }}
                    />
                  </p>
                </div>
              </div>
              <div class="soul-card__divider"></div>
              <div class="soul-card__content">
                <h3>Post dell'autore</h3>
                <ul>
                  {authorPosts.map((post, index) => (
                    <li key={index}>
                      <Link href={`/blog/${post.postId}`}>
                        <a>{post.data.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="soul-grid-item-1/4-span">
          <div></div>
        </div>
      </div>
    </OneAuthorLayout>
  );
}
