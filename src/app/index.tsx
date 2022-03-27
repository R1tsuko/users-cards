import { withProviders } from "./providers";
import { Routing } from "../pages";
import "./normalize.scss";
import s from "./s.module.scss";

const App = () => {
  return (
    <div className={s.appWrapper}>
      <Routing />
    </div>
  );
};

export default withProviders(App);
