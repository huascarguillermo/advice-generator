import { useState, useEffect } from "react";
import Generator from "./components/Generator";
import style from "./App.module.css";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [advice, setAdvice] = useState({});
  const [newAdvice, setNewAdvice] = useState(false);

  useEffect(() => {
    async function getAdvice() {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        await setLoading(false);
        setAdvice(data.slip);
      } catch (error) {
        console.log(error);
      }
    }
    getAdvice();
  }, [newAdvice]);

  return (
    <>
      <main className={style.main}>
        {loading ? (
          <Loading />
        ) : (
          <Generator
            advice={advice}
            newAdvice={newAdvice}
            setNewAdvice={setNewAdvice}
          />
        )}
      </main>
    </>
  );
}

export default App;
