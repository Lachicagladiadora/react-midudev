export const TwitterFollowCard = ({ url, userName, name, isFollowing }) => {
  return (
    <section className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-image"
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
          className="tw-follow-card-button"
          onClick={() => console.log(isFollowing)}
        >
          Follow
        </button>
      </aside>
    </section>
  );
};
