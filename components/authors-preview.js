import Link from "next/link";
import Image from "next/image";

export default function AuthorsPreview({ id, author, authorAvatar }) {
  return (
    <div className="soul-content soul-font-scale-l">
      <div className="soul-grid  soul-grid--horizontal  ">
        <div className="soul-grid-item-1/3-span">
          <div>
            <div className="soul-card soul-card--flat soul-card--comfortable">
              <div className="soul-card__header">
                <div className="soul-card__thumbnail"></div>
                <div className="soul-card__header-content">
                  <h1 className="soul-font-size-l h-text-bold">
                    <Link href={`/authors/${id}`}>
                      <a>{author}</a>
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="soul-card__media">
                <img src={authorAvatar} width="50%" alt={authorAvatar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
