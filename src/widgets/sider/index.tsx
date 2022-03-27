import { useSearchParams } from "react-router-dom";
import { FilterValue } from "../../shared/types";
import Button from "../../shared/ui/button";
import s from "./s.module.scss";

type SiderProps = {
  withFilters?: boolean;
};

const Sider: React.FC<SiderProps> = ({ withFilters }) => {
  const [, setSearchParams] = useSearchParams();

  const onFilterClick = (filterValue: FilterValue) => () => {
    setSearchParams({ filter: filterValue });
  };

  return (
    <aside className={s.sider}>
      {withFilters && (
        <div className={s.filters}>
          <h2 className={s.title}>Сортировка</h2>
          <div className={s.buttonWrapper}>
            <Button onClick={onFilterClick("city")}>по городу</Button>
          </div>
          <div className={s.buttonWrapper}>
            <Button onClick={onFilterClick("companyName")}>по компании</Button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sider;
