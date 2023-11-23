import { createRoute } from "@hono/zod-openapi";
import { StatusCodes } from "http-status-codes";

import {
  UserPathParamsParser,
  UserResParser,
  UserSearchQueryParser,
  UsersResParser,
  CreateUserReqParser,
  UpdateUserReqParser,
} from "@api/user/schema";
import { JSON_CONTENT_TYPE } from "@api/util/content-types";

export const getUserForAdminRoute = createRoute({
  method: "get",
  path: "/system-admin/users/{id}",
  request: {
    params: UserPathParamsParser,
  },
  responses: {
    [StatusCodes.OK]: {
      content: {
        [JSON_CONTENT_TYPE]: {
          schema: UserResParser,
        },
      },
      description: "get user for admin",
    },
  },
});

export const getMeRoute = createRoute({
  method: "get",
  path: "/users/me",
  responses: {
    [StatusCodes.OK]: {
      content: {
        [JSON_CONTENT_TYPE]: {
          schema: UserResParser,
        },
      },
      description: "get myself",
    },
  },
  [StatusCodes.BAD_REQUEST]: {},
});

export const getUserRoute = createRoute({
  method: "get",
  path: "/users/{id}",
  request: {
    params: UserPathParamsParser,
  },
  responses: {
    [StatusCodes.OK]: {
      content: {
        [JSON_CONTENT_TYPE]: {
          schema: UserResParser,
        },
      },
      description: "get the user by id",
    },
  },
});

export const searchForUserRoute = createRoute({
  method: "get",
  path: "/users",
  request: {
    query: UserSearchQueryParser,
  },
  responses: {
    [StatusCodes.OK]: {
      content: {
        [JSON_CONTENT_TYPE]: {
          schema: UsersResParser,
        },
      },
      description: "search for users",
    },
  },
  [StatusCodes.BAD_REQUEST]: {},
});

export const createUserRoute = createRoute({
  method: "post",
  path: "/users",
  request: {
    body: {
      content: {
        [JSON_CONTENT_TYPE]: {
          schema: CreateUserReqParser,
        },
      },
    },
  },
  responses: {
    [StatusCodes.CREATED]: {
      content: {
        [JSON_CONTENT_TYPE]: {
          schema: UserResParser,
        },
      },
      description: "create the user",
    },
  },
  [StatusCodes.BAD_REQUEST]: {},
});

export const updateUserRoute = createRoute({
  method: "patch",
  path: "/users/{id}",
  request: {
    params: UserPathParamsParser,
    body: {
      content: {
        [JSON_CONTENT_TYPE]: {
          schema: UpdateUserReqParser,
        },
      },
    },
  },
  responses: {
    [StatusCodes.OK]: {
      content: {
        [JSON_CONTENT_TYPE]: {
          schema: UserResParser,
        },
      },
      description: "update the user by id",
    },
  },
});

export const deleteUserRoute = createRoute({
  method: "delete",
  path: "/users/{id}",
  request: {
    params: UserPathParamsParser,
  },
  responses: {
    [StatusCodes.NO_CONTENT]: {
      description: "delete the user by id",
    },
  },
});
