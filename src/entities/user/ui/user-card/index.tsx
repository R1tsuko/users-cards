import { Link } from "react-router-dom";
import s from "./s.module.scss";

type UserCardProps = {
  fio: string;
  city: string;
  companyName: string;
  id: number;
};

const UserCard: React.FC<UserCardProps> = ({ fio, city, companyName, id }) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.info}>
        <div className={s.listItem}>
          <span className={s.title}>ФИО: </span>
          <span className={s.value}>{fio}</span>
        </div>
        <div className={s.listItem}>
          <span className={s.title}>город: </span>
          <span className={s.value}>{city}</span>
        </div>
        <div className={s.listItem}>
          <span className={s.title}>компания: </span>
          <span className={s.value}>{companyName}</span>
        </div>
      </div>
      <div className={s.linkWrapper}>
        <Link className={s.link} to={`/profile/${id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
