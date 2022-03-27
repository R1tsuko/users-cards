import { TailSpin } from "react-loader-spinner";
import s from "./s.module.scss";

const Preloader = () => {
  return (
    <div className={s.spinWrapper}>
      <TailSpin color="grey" width="100%" height="400px" />
    </div>
  );
};

export default Preloader;
