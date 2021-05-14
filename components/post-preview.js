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
  authorsData
}) {
  return (
    <styles>
      <li className={utilStyles.listItem} key={id}>
        <Date dateString={date} />
        <br></br>
        <Link href={`/blog/${id}`}>
          <a>{title}</a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>

         {authorsKey.map((author, index) => <Link href={`/authors/${author}`} key={index}>
            <a>{author.replace('-', ' ')} </a> 
          </Link>) }
          

          <br></br>
          <div className={utilStyles.summary}>{teaser}</div>
          <br />
          <br />
        </small>
      </li>
    </styles>
  );
}
