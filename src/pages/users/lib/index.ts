import { UsersResponse, User } from "./../../../shared/types/index";

export const normalizeUsersData: (
  usersData: Array<UsersResponse>
) => Array<User> = (usersData) => {
  return usersData.map(
    ({ name, username, email, address, phone, website, id, company }) => ({
      name,
      userName: username,
      email,
      street: address.street,
      city: address.city,
      zipCode: address.zipcode,
      phone,
      website,
      id,
      companyName: company.name,
    })
  );
};

export const sortUsers = (users: Array<User> | null, by: keyof User) => {
  return (
    users &&
    [...users].sort((a, b) =>
      typeof by === "string"
        ? (a[by] as string).localeCompare(b[by] as string)
        : a[by] - b[by]
    )
  );
};

export * from "../../../shared/lib/hooks";
