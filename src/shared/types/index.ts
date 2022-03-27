export type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
  street: string;
  city: string;
  zipCode: string;
  phone: string;
  website: string;
  companyName: string;
};

export type UsersResponse = {
  address: { city: string; street: string; suite: string; zipcode: string };
  company: { name: string; catchPhrase: string; bs: string };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type FilterValue = "city" | "companyName";

export type ProfileForm = {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  comment: string;
};
