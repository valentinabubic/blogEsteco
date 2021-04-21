import utilStyles from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import styles from '../components/layout.module.css'
export default function PostPreview({ id, date, title, author, content }) {
  let summary; //la dichiaro
  if (content) {
    //se esiste content allora stampo la stringa summary
    summary = content.split(" ").splice(0, 200).join(" "); //stampo il contenuto di summary in un unica stringa a partire dal primo carattere fino al 200
  }

  return (
      <styles>
    <li className={utilStyles.listItem} key={id}>
      <Date dateString={date} />
      <br></br>
      <Link href={`/posts/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Link href="/authors/[id]" as={`/authors/${id}`}>
          {author}
        </Link>
        <br></br>
        <div className={utilStyles.summary}>{summary}</div>
        <br />
        <br />
      </small>
    </li>
    </styles>
  );
}
