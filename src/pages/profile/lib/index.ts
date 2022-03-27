import { ProfileForm, User } from "./../../../shared/types/index";

export const findUserById = (users: Array<User>, id: number) =>
  users.find((user) => user.id === id) as User;

export const formFields: Array<{
  name: keyof ProfileForm;
  rules?: {
    required?: boolean;
    maxLength?: number;
  };
  label: string;
}> = [
  {
    name: "name",
    rules: {
      required: true,
      maxLength: 50,
    },
    label: "Name",
  },
  {
    name: "username",
    rules: {
      required: true,
      maxLength: 30,
    },
    label: "User name",
  },
  {
    name: "email",
    rules: {
      required: true,
    },
    label: "E-mail",
  },
  {
    name: "street",
    rules: {
      required: true,
    },
    label: "Street",
  },
  {
    name: "city",
    rules: {
      required: true,
    },
    label: "City",
  },
  {
    name: "zipcode",
    rules: {
      required: true,
      maxLength: 30,
    },
    label: "Zip-code",
  },
  {
    name: "phone",
    rules: {
      required: true,
      maxLength: 50,
    },
    label: "Phone",
  },
  {
    name: "website",
    rules: {
      required: true,
    },
    label: "Website",
  },
];
