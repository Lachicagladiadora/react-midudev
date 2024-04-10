import { useState } from "react";

export const TwitterFollowCard = ({
  url,
  userName = "unknown",
  name = "unknown",
  initialIsFollowing,
  // onClick,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  // PascalCase
  // camelCase
  // snake_case
  // kebab-case

  return (
    <section className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          src={url}
          alt={`${name} avatar`}
        />
        <div className="tw-follow-card-info">
          <strong className="tw-follow-card-info-name">{name}</strong>
          <span className="tw-follow-card-info-userName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          className={`${
            isFollowing
              ? "tw-follow-card-button is-following"
              : "tw-follow-card-button"
          }`}
          onClick={() => {
            setIsFollowing(!isFollowing);
          }}
        >
          <span className="tw-follow-card-text">
            {isFollowing ? "Following" : "Follow"}
          </span>
          <span
            className="tw-follow-card-stopFollow is-following:hover tw-follow-card-text"
            onClick={() => {
              setIsFollowing(!isFollowing);
            }}
          >
            Unfollow
          </span>
        </button>
      </aside>
    </section>
  );
};
