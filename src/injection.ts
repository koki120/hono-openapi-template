import {
  useGetUserForAdminHandler,
  useGetMeHandler,
  useGetUserHandler,
  useSearchForUserHandler,
  useCreateUserHandler,
  useUpdateUserHandler,
  useDeleteUserHandler,
} from "@api/user/handler";

export const getUserForAdminHandler = useGetUserForAdminHandler({});
export const getMeHandler = useGetMeHandler({});
export const getUserHandler = useGetUserHandler({});
export const searchForUserHandler = useSearchForUserHandler({});
export const createUserHandler = useCreateUserHandler({});
export const updateUserHandler = useUpdateUserHandler({});
export const deleteUserHandler = useDeleteUserHandler({});
