"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dto = void 0;
const zod_1 = require("zod");
exports.Dto = zod_1.z.object({
    query: zod_1.z.object({
        slack_name: zod_1.z
            .string()
            .min(3, { message: "slack_name must have at least three characters " })
            .max(20, {
            message: "slack_name must not be greater than 20 characters",
        }),
        track: zod_1.z
            .string()
            .min(3, { message: "track must have at least three characters " })
            .max(20, {
            message: "track must not be greater than 20 characters",
        }),
    }),
});
