import style from "./style/generator.module.css";

function Generator({ advice, newAdvice, setNewAdvice }) {
  return (
    <div className={style.card}>
      <h1 className={style.tittle}>advice #{advice.id}</h1>
      <p className={style.text}>“{advice.advice}”</p>
      <picture>
        <source
          srcSet="images/pattern-divider-desktop.svg"
          media="(min-width: 500px)"
        />
        <img src="images/pattern-divider-mobile.svg" alt="Pattern Divider" />
      </picture>

      <button onClick={() => setNewAdvice(!newAdvice)} className={style.button}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="dice"
        >
          <title id="dice">Icon Dice</title>
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
        <span className="visually-hidden">Button Advice Generator</span>
      </button>
    </div>
  );
}

export default Generator;
