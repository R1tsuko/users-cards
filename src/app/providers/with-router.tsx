import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "../../shared/ui/preloader";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>{component()}</Suspense>
    </BrowserRouter>
  );
