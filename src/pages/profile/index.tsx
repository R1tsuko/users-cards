import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ProfileForm, User } from "../../shared/types";
import Button from "../../shared/ui/button";
import Input from "../../shared/ui/input";
import PageTitle from "../../shared/ui/page-title";
import TextArea from "../../shared/ui/textarea";
import Sider from "../../widgets/sider";
import { useAppDispatch, useAppSelector } from "../users/lib";
import { getUsers, selectUsers } from "../../entities/user/model/redux-slice";
import { findUserById, formFields } from "./lib";
import s from "./s.module.scss";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const [user, setUser] = useState<User | null>(null);
  const params = useParams();

  const [isEditable, setIsEditable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileForm>();

  useEffect(() => {
    if (!users) {
      dispatch(getUsers());
    }
  }, []);
  useEffect(() => {
    if (users) {
      setUser(findUserById(users, parseInt(params.userId as string)));
    }
  }, [users]);
  useEffect(() => {
    reset({
      name: user?.name,
      username: user?.userName,
      email: user?.email,
      street: user?.street,
      city: user?.city,
      zipcode: user?.zipCode,
      phone: user?.phone,
      website: user?.website,
    });
  }, [user]);

  const onEditClick = () => {
    setIsEditable(true);
  };
  const onSubmit = (data: ProfileForm) => console.log(data);

  return (
    <div className={s.pageWrapper}>
      <Sider />
      <main className={s.main}>
        <div className={s.header}>
          <div className={s.titleWrapper}>
            <PageTitle>Профиль пользователя</PageTitle>
          </div>
          <Button onClick={onEditClick}>Редактировать</Button>
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputs}>
            {formFields.map((field) => (
              <div className={s.inputWrapper} key={field.name}>
                <Input
                  register={register(field.name, field.rules)}
                  label={field.label}
                  isError={errors[field.name]}
                  disabled={!isEditable}
                />
              </div>
            ))}
            <div className={s.inputWrapper}>
              <TextArea
                label="Comment"
                register={register("comment")}
                isError={errors.comment}
                disabled={!isEditable}
                height="55px"
              />
            </div>
          </div>
          <div className={s.submitWrapper}>
            <Button>Отправить</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage;
