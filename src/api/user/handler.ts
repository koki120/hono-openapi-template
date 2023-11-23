import { RouteHandler } from "@hono/zod-openapi";
import { HTTPException } from "hono/http-exception";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";

import {
  getUserForAdminRoute,
  getMeRoute,
  getUserRoute,
  searchForUserRoute,
  createUserRoute,
  updateUserRoute,
  deleteUserRoute,
} from "@/api/user/router";
import {
  UserSearchQueryParser,
  CreateUserReqParser,
  UpdateUserReqParser,
} from "@/api/user/schema";

export const useGetUserForAdminHandler =
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deps: object,
  ): RouteHandler<typeof getUserForAdminRoute> =>
  async (c) => {
    const param = await c.req.valid("param");
    // 何らかの処理
    return c.jsonT(
      {
        id: param.id,
        name: "aaa",
        email: "aaa@example.com",
        type: "admin",
      },
      StatusCodes.OK,
    );
  };

export const useGetMeHandler =
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deps: object,
  ): RouteHandler<typeof getMeRoute> =>
  async (c) => {
    // 何らかの処理
    const id = "aaa";
    return c.jsonT(
      {
        id,
        name: "aaa",
        email: "aaa@example.com",
        type: "admin",
      },
      StatusCodes.OK,
    );
  };

export const useGetUserHandler =
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deps: object,
  ): RouteHandler<typeof getUserRoute> =>
  async (c) => {
    const param = await c.req.valid("param"); // 何らかの処理
    return c.jsonT(
      {
        id: param.id,
        name: "aaa",
        email: "aaa@example.com",
        type: "general",
      },
      StatusCodes.OK,
    );
  };

export const useSearchForUserHandler =
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deps: object,
  ): RouteHandler<typeof searchForUserRoute> =>
  async (c) => {
    try {
      const query = c.req.query();
      const validationRes = UserSearchQueryParser.parse(query);

      // 何らかの処理
      return c.jsonT(
        {
          list: [
            {
              id: "acde070d-8c4c-4f0d-9d8a-162843c10333",
              name: validationRes.query,
              email: "aaa@example.com",
              type: "general",
            },
          ],
          total: 0,
        },
        StatusCodes.OK,
      );
    } catch (e: unknown) {
      if (e instanceof z.ZodError) {
        throw new HTTPException(StatusCodes.BAD_REQUEST, {
          message: e.message,
        });
      }
      throw e;
    }
  };

export const useCreateUserHandler =
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deps: object,
  ): RouteHandler<typeof createUserRoute> =>
  async (c) => {
    const body = await c.req.json();
    const validationRes = CreateUserReqParser.parse(body);
    // 何らかの処理
    return c.jsonT(
      {
        id: "aaa",
        name: validationRes.name,
        email: validationRes.email,
        type: validationRes.type,
      },
      StatusCodes.CREATED,
    );
  };

export const useUpdateUserHandler =
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deps: object,
  ): RouteHandler<typeof updateUserRoute> =>
  async (c) => {
    const param = await c.req.valid("param");
    const body = await c.req.json();
    const validationRes = UpdateUserReqParser.parse(body);
    // 何らかの処理
    return c.jsonT(
      {
        id: param.id,
        name: validationRes.name,
        email: validationRes.email,
        type: validationRes.type,
      },
      StatusCodes.OK,
    );
  };

export const useDeleteUserHandler =
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deps: object,
  ): RouteHandler<typeof deleteUserRoute> =>
  async (c) => {
    const param = await c.req.valid("param");
    // 何らかの処理
    return c.jsonT(
      {
        id: param.id,
        name: "aaa",
        email: "aaa@example.com",
        type: "general",
      },
      StatusCodes.OK,
    );
  };
