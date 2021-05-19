import Head from "next/head";
import Link from "next/link";

const name = "Esteco Blog";
export const siteTitle = "Esteco Blog";

export default function Layout({ children, home, backUrl }) {
  return (
    <div className="soul-content soul-font-scale-l">
      <div>
        <div>
          <Head></Head>
          <header>
            {home ? (
              <>
                <h1>{name}</h1>
              </>
            ) : (
              <>
                <h2 className="h-text-align-center">
                  <Link href="/blog">
                    <a>{name}</a>
                  </Link>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
          {backUrl ? (
            <>
              <div className="a-button  a-button--primary">
                <Link href={backUrl}>
                  <a>← Home</a>
                </Link>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
