import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserCard from "../../entities/user/ui/user-card";
import { FilterValue, User } from "../../shared/types";
import Sider from "../../widgets/sider";
import { sortUsers, useAppDispatch, useAppSelector } from "./lib";
import s from "./s.module.scss";
import {
  getUsers,
  selectUsers,
  setUsers,
} from "../../entities/user/model/redux-slice";
import PageTitle from "../../shared/ui/page-title";
import Preloader from "../../shared/ui/preloader";

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getUsers()).then((response) => {
      if (searchParams.get("filter")) {
        dispatch(
          setUsers(
            sortUsers(
              response.payload as User[],
              searchParams.get("filter") as FilterValue
            )
          )
        );
      }
    });
  }, []);

  useEffect(() => {
    if (searchParams.get("filter")) {
      dispatch(
        setUsers(sortUsers(users, searchParams.get("filter") as FilterValue))
      );
    }
  }, [searchParams]);

  return (
    <div className={s.pageWrapper}>
      <Sider withFilters />
      <main className={s.main}>
        <div className={s.titleWrapper}>
          <PageTitle>Спиосок пользователей</PageTitle>
        </div>
        <div className={s.usersList}>
          {users ? (
            users.map(({ name, companyName, city, id }) => (
              <UserCard
                fio={name}
                city={city}
                companyName={companyName}
                id={id}
                key={id}
              />
            ))
          ) : (
            <Preloader />
          )}
        </div>
        {users && (
          <div className={s.usersCount}>
            Найдено {users.length} пользователей
          </div>
        )}
      </main>
    </div>
  );
};

export default UsersPage;
