import utilStyles from "../components/layout";
import Link from "next/link";
import Date from "../components/date";

import { getAllBlogIds, getBlogData } from "../lib/posts";

export default function PostPreview({
  id,
  date,
  title,
  authorsKey,
  teaser,
  seoImage,
}) {
  return (
    <div className="soul-grid  soul-grid--horizontal ">
      <div className="soul-grid-item-auto-span">
        <div></div>
      </div>
      <div className="soul-grid-item-fill-span">
        <div>
          <div className="soul-card soul-card--flat soul-card--comfortable">
            <div className="soul-card__header">
              <div className="soul-card__thumbnail"></div>
              <div className="soul-card__header-content">
                <h1 className="soul-font-size-l h-text-bold">
                  <Link href={`/blog/${id}`}>
                    <a>{title}</a>
                  </Link>
                </h1>
                <h2 className="a-label a-label--reduced">
                  <Date dateString={date} />
                </h2>
                <h2 className="a-label a-label--reduced">
                  {" "}
                  {authorsKey.map((author, index) => (
                    <Link href={`/authors/${author}`} key={index}>
                      <a>{author.replace("-", " ")} </a>
                    </Link>
                  ))}
                </h2>
              </div>
            </div>
            <div className="soul-card__media">
              <img src={seoImage} width="75%" alt="" />
            </div>
            <div className="soul-card__content">
              <div className="soul-content soul-font-scale-s">
                <div className={utilStyles.summary}>{teaser}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="soul-grid-item-auto-span">
        <div></div>
      </div>
    </div>
  );
}
