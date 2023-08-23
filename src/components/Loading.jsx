import style from "./style/loading.module.css";

function Loading() {
  return (
    <div className={style["lds-ripple"]}>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
