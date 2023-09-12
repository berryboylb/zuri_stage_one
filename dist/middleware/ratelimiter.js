"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const defaultMinutes = 10;
const defaultMaxRequests = 300;
/**
 * Rate Limiter Middleware
 * @param minutes         Time threshold to restart the limit, default is `10 minutes`
 * @param maxRequests     Maximum requests per second per IP address limit number, default is `300`
 * @returns returns the rate limit middleware to use in express app or routes
 */
const limiter = (maxRequests, minutes) => (0, express_rate_limit_1.default)({
    windowMs: (minutes || defaultMinutes) * 60 * 1000,
    max: maxRequests || defaultMaxRequests,
    message: `Too many requests, please try again later in ${minutes || defaultMinutes} minutes.`,
});
exports.default = limiter;
