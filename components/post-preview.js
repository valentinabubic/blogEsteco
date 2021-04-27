import utilStyles from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import styles from "../components/layout.module.css";
export default function PostPreview({ id, date, title, authorsKey, teaser, writtenBy }) {
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
         <Link href={`/authors/${authorsKey}`}>
           <a>{writtenBy}</a>
         </Link>
          
          <br></br>
          <div className={utilStyles.summary}>{teaser}</div>
          <br />
          <br />
        </small>
      </li>
    </styles>
  );
}
