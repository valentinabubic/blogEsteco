import utilStyles from "./layout";
import Link from "next/link";
import Image from "next/image";

export default function AuthorsPreview({ id, author, authorAvatar }) {
  return (
    <styles>
      <li className={utilStyles.listItem} key={id}>
        <Image
          src={authorAvatar}
          alt={authorAvatar}
          width={100}
          height={100}
          layout="fixed"
        />
        <br></br>
        <Link href={`/authors/${id}`}>
          <a>{author}</a>
        </Link>
        <br></br>
        <br></br>
        <br></br>
      </li>
    </styles>
  );
}
