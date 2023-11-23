export const General = "general";
export const Admin = "admin";
export const userTypes = [General, Admin] as const;
export type UserType = (typeof userTypes)[number];

export type User = {
  id: string;
  name: string;
  email: string;
  type: UserType;
  hashedPassword: string;
};

export const newUser = (): User => ({
  id: "",
  name: "",
  email: "",
  type: General,
  hashedPassword: "",
});
