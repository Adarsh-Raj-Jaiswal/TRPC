import { t } from "../trpc";
import { z } from "zod";

const formProcedure = t.procedure.input(
  z.object({
    name: z.string().min(1, { message: "This is required" }),
    number: z
      .string()
      .min(10, { message: "Must be a valid mobile number" })
      .max(10, { message: "Must be a valid mobile number" }),
    email: z
      .string()
      .min(1, { message: "This is required" })
      .email("This is not a valid email"),
  })
);

export const formRouter = t.router({
  fillForm: formProcedure
    .output(z.object({ success: z.boolean() }))
    .mutation((req) => {
      console.log(req.input.name);
      console.log(req.input.email);
      console.log(req.input.number);
      return { success: true };
    }),
});
