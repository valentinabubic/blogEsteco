import Head from "next/head";
import Link from "next/link";
import utilModule from "../styles/utils.module.css";

const name = "Esteco Blog";
export const siteTitle = "Esteco Blog";

export default function Layout({ children, home, backUrl }) {
  return (
    <div className=" soul-font-scale-l">
      <div className="soul-grid  soul-grid--horizontal  soul-grid--justify-center">
        <div className="soul-grid-item-1/2-span">
          <div>
            
            <header>
              {home ? (
                <>
                  <h1 className={utilModule.homelink}>{name}</h1>
                </>
              ) : (
                <>
                  <h1 className={utilModule.homelink}>
                    <Link href="/blog">
                      {name}
                    </Link>
                  </h1>
                </>
              )}
            </header>
            <main>{children}</main>
            <br></br>
            <br></br>
            {backUrl ? (
              <div className="soul-space-stack-bottom-m">
                <div className="a-button  a-button--primary ">
                  <Link href={backUrl}>
                    <a>← Home</a>
                  </Link>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
