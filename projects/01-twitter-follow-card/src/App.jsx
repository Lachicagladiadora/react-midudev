<<<<<<< Updated upstream
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
>>>>>>> Stashed changes

export const App = () => {
  return (
<<<<<<< Updated upstream
    <div>
      <h1>Twitter Follow Card</h1>
      <article>
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
      </article>
    </div>
  );
};
=======
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
>>>>>>> Stashed changes
