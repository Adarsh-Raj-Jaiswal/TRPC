import { adminProcedure, t } from "../trpc";
import { userRouter } from "./users";
import { formRouter } from "./form";
export const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "HELLO FROM SAYHI PROCEDURE";
  }),

  logToServer: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;
      throw new Error("Invalid input : Expected string");
    })
    .mutation((req) => {
      console.log(`Client says: ${req.input}`);
      return true;
    }),

  secretData: adminProcedure.query(({ ctx }) => {
    console.log(ctx.user);
    return "some top secret admin data";
  }),
  users: userRouter,
  form: formRouter,
});
