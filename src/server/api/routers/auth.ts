import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const authRouter = createTRPCRouter({
  testMutation: publicProcedure.mutation(async ({ ctx, input }) => {
    console.log("hello mutation ");
    return "hello mutation";
  }),
  testQuery: publicProcedure.query(async ({ ctx }) => {
    console.log("hello Query");
    return "hello Query";
  }),
});
