import { z } from "@hono/zod-openapi";

import { userTypes } from "@domain/user/entity";

export const UserPathParamsParser = z.object({
  id: z
    .string()
    .uuid()
    .openapi({
      param: {
        name: "id",
        in: "path",
      },
    }),
});

export const UserSearchQueryParser = z.object({
  query: z.string().openapi({ param: { in: "query" } }),
  type: z.enum(userTypes).openapi({ param: { in: "query" } }),
  skip: z.string().openapi({ param: { in: "query" } }),
  limit: z.string().openapi({ param: { in: "query" } }),
});

export const CreateUserReqParser = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    type: z.enum(userTypes),
  })
  .openapi("create-user-request");

export type CreateUserReq = z.infer<typeof CreateUserReqParser>;

export const UpdateUserReqParser = z
  .object({
    name: z.string(),
    email: z.string().email(),
    type: z.enum(userTypes),
  })
  .openapi("update-user-request");

export const UserResParser = z
  .object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    type: z.enum(userTypes),
  })
  .openapi("user-response");

export const UsersResParser = z
  .object({
    list: z.array(UserResParser),
    total: z.number(),
  })
  .openapi("users-response");
