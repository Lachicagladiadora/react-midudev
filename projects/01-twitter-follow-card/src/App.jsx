import "./App.css";

export const App = () => {
  return (
    <div>
      <h1>Twitter Follow Card</h1>
      <article className="tw-follow-card">
        <header className="tw-follow-card-header">
          <img
            className="tw-follow-card-image"
            src="https://2.bp.blogspot.com/-0IVoz3YrCVo/T0p6gBdlUUI/AAAAAAAAQJc/O3SzL5GPsyU/s1600/era+bad+michael+jackson+(80).jpg"
            alt="Michael Jackson avatar"
          />
          <div className="tw-follow-card-info">
            <strong className="tw-follow-card-info-name">
              Michael Joseph Jackson
            </strong>
            <span className="tw-follow-card-info-userName">
              @michaeljackson
            </span>
          </div>
        </header>
        <aside>
          <button className="tw-follow-card-button">Follow</button>
        </aside>
      </article>
    </div>
  );
};
