import Link from "next/link";
import Image from "next/image";

export default function AuthorsPreview({ id, author, authorAvatar }) {
  return (
    <div className="soul-content soul-font-scale-l">
      <div class="soul-grid  soul-grid--horizontal  ">
        <div class="soul-grid-item-1/3-span">
          <div>
            <div class="soul-card soul-card--flat soul-card--comfortable">
              <div class="soul-card__header">
                <div class="soul-card__thumbnail"></div>
                <div class="soul-card__header-content">
                  <h1 class="soul-font-size-l h-text-bold">
                    <Link href={`/authors/${id}`}>
                      <a>{author}</a>
                    </Link>
                  </h1>
                </div>
              </div>
              <div class="soul-card__media">
                <img src={authorAvatar} width="50%" alt={authorAvatar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
