import utilStyles from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import utilModule from "../styles/utils.module.css";
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
    <div>
      <a href={`/blog/${id}`}>
        <div className="soul-card soul-card--button soul-card--regular soul-card--comfortable">
          <div className="soul-card__header">
            <div className="soul-card__header-content">
              <h1 className="soul-font-size-l h-text-bold">{title}</h1>

              <Date className="a-label a-label--reduced" dateString={date} />

              <p className="a-label a-label--reduced">
                {authorsKey.map((author, index) => {
                  return index == 0 ? (
                    <span key={index}>{author.replace("-", " ")}</span>
                  ) : (
                    <span key={index}>, {author.replace("-", " ")}</span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="soul-card__media">
            <img src={seoImage} className={utilModule.indexImage} alt="" />
          </div>
          <div className="soul-card__content">
            <div className="soul-content soul-font-scale-s">
              <div className={utilStyles.summary}>{teaser}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
