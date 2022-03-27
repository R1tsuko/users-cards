import { ReactNode } from "react";
import s from "./s.module.scss";

type PageTitleProps = {
  children: ReactNode;
};

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <h2 className={s.title}>{children}</h2>
  );
};

export default PageTitle;
