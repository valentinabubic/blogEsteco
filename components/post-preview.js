import utilStyles from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import styles from "../components/layout.module.css";
import { getAllBlogIds, getBlogData } from "../lib/posts";


export default function PostPreview({
  id,
  date,
  title,
  authorsKey,
  teaser,
  authorsData,
  seoImage
}) {
  return (
    <styles>
  <div class="soul-grid  soul-grid--horizontal">
  <div class="soul-grid-item-auto-span"><div></div></div>
  <div class="soul-grid-item-fill-span"><div><div class="soul-card soul-card--flat soul-card--comfortable" key={id}>
  <div class="soul-card__header">
    <div class="soul-card__thumbnail"></div>
    <div class="soul-card__header-content">
      <h1 class="soul-font-size-l h-text-bold"><Link href={`/blog/${id}`} >
          <a>{title}</a>
        </Link></h1>
      <h2 class="a-label a-label--reduced"><Date dateString={date} /></h2>
      <h2 class="a-label a-label--reduced"> {authorsKey.map((author, index) => <Link href={`/authors/${author}`} key={index}>
            <a>{author.replace('-', ' ')} </a> 
          </Link>) }</h2>
    </div>
  </div>
  <div class="soul-card__media"><img src={seoImage} width="15%" alt="" /></div>
  <div class="soul-card__content">
    <div class="soul-content soul-font-scale-s">
      <div className={utilStyles.summary}>{teaser}</div>
    </div>
  </div>
</div></div></div>
  <div class="soul-grid-item-auto-span"><div></div></div>
</div>
    
    </styles>
  );
}

