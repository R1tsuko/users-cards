import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import Preloader from "../../shared/ui/preloader";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <HashRouter>
      <Suspense fallback={<Preloader />}>{component()}</Suspense>
    </HashRouter>
  );
