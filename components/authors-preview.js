import utilModule from "../styles/utils.module.css";

export default function AuthorsPreview({ id, author, authorAvatar }) {
  return (
    <a href={`/authors/${id}`}>
      <div className="soul-card soul-card--button soul-card--regular soul-card--comfortable ">
        <div className="soul-card__header">
          <div className="soul-card__thumbnail">
            <div className="soul-avatar  soul-avatar--user  soul-avatar--xl">
              <div className="soul-avatar__thumbnail">
                <img
                  className={`${utilModule.nopadding} soul-avatar__image`}
                  src={authorAvatar}
                  alt={authorAvatar}
                />
              </div>
            </div>
          </div>
          <div className="soul-card__header-content soul-font-size-l h-text-bold">
            {author}
          </div>
        </div>
      </div>
    </a>
  );
}
