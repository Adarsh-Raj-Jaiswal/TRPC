import express from "express";
import cors from "cors";

import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";
import { createContext } from "./context";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(3000, () => console.log("running"));

export type AppRouter = typeof appRouter;
