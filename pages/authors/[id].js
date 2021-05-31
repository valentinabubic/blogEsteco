import { getAllAuthorsIds, getAuthorsData } from "../../lib/authors";
import Head from "next/head";
import Link from "next/link";
import { getAuthorPosts } from "../../lib/posts";
import Layout, { siteTitle } from "../../components/layout";
import utilModule from "../../styles/utils.module.css";

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
    <Layout backUrl={`/blog`}>
      <Head>
        <title>{authorsData.author}</title>
      </Head>

      <div
        className="soul-card soul-card--flat soul-card--comfortable soul-space-stack-top-l
"
      >
        <div className="soul-content soul-card__header">
          <div className="soul-card__thumbnail">
            <div className="soul-avatar  soul-avatar--user  soul-avatar--xl">
              <div className="soul-avatar__thumbnail">
                <img
                  className={`${utilModule.nopadding} soul-avatar__image`}
                  src={authorsData.authorAvatar}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="soul-card__header-content soul-font-size-l h-text-bold">
            {authorsData.author}
          </div>
        </div>
        <div className="soul-card__content soul-content soul-font-scale-l">
          <div
            dangerouslySetInnerHTML={{
              __html: authorsData.contentHtml,
            }}
          />
        </div>
        <div className="soul-card__divider"></div>
        <div className="soul-card__content ">
          <h3 className="soul-content soul-space-stack-bottom-l">
            Post dell'autore
          </h3>

          {authorPosts.map((post, index) => (
            <a
              href={`/blog/${post.postId}`}
              class="soul-navigation-card  soul-navigation-card--comfortable soul-card--button "
            >
              <div class="soul-navigation-card__content">
                <div class="soul-navigation-card__title">
                  <span class="soul-font-size-m h-text-bold">
                    {post.data.title}
                  </span>
                </div>
              </div>
              <span class="soul-navigation-card__icon"></span>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
