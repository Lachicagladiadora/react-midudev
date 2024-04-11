import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export const App = () => {
  const unknown = {
    isFollowing: false,
    url: "https://i.pinimg.com/736x/fa/09/2c/fa092c835697db0930ff46144934def3.jpg",
  };

  return (
    <div>
      <h1>Twitter Follow Card</h1>
      <article className="contain-follow-card">
        <TwitterFollowCard
          isFollowing={true}
          userName={"michaeljackson"}
          url={
            "https://2.bp.blogspot.com/-0IVoz3YrCVo/T0p6gBdlUUI/AAAAAAAAQJc/O3SzL5GPsyU/s1600/era+bad+michael+jackson+(80).jpg"
          }
          name={"Michael Joseph Jackson"}
        />

        <TwitterFollowCard
          isFollowing={false}
          userName={"bonovox"}
          url={
            "https://i.pinimg.com/474x/b3/a4/82/b3a482f88645f77cde073ecdd363787d.jpg"
          }
          name={"Paul David Hewson"}
        />
        <TwitterFollowCard
          isFollowing
          userName={"steveperry"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJktDoI1-1hLxR7SV5rv0qUI87aIrTS4DPnj9zFYY5s_7iYc8FX8y3MtlUhZ_DyxVLME&usqp=CAU"
          }
          name={"Stephen Ray Perry"}
        />
        <TwitterFollowCard
          isFollowing={false}
          userName={"jonbonjovi"}
          url={"https://iscale.iheart.com/catalog/artist/42212"}
          name={"John Francis Bongiovi"}
        />
        <TwitterFollowCard {...unknown} />
      </article>
    </div>
  );
};

export default App;
