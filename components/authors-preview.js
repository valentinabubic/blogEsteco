import utilStyles from "./layout";
import Link from "next/link";
import Date from "./date";
import styles from '../components/layout.module.css'
export default function AuthorsPreview({ id, author, authorAvatar }) {

  return (
    <styles>
      <li className={utilStyles.listItem} key={id}>

        <Link href={`/authors/${id}`}>
          <a>{author}</a>
        </Link>
        {/* aggiungi authorAvatar */}
      </li>
    </styles>
  );
}