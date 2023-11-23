export const General = "general";
export const Admin = "admin";
export const userTypes = [General, Admin] as const;
export type UserType = (typeof userTypes)[number];

export type User = {
  id: string;
  email: string;
  type: UserType;
};

export const newUser = (): User => ({
  type: General,
  email: "",
  id: "",
});
