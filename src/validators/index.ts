import { z } from "zod";
export const Dto = z.object({
  query: z.object({
    slack_name: z
      .string()
      .min(3, { message: "slack_name must have at least three characters " })
      .max(20, {
        message: "slack_name must not be greater than 20 characters",
      }),
    track: z
      .string()
      .min(3, { message: "track must have at least three characters " })
      .max(20, {
        message: "track must not be greater than 20 characters",
      }),
  }),
});
