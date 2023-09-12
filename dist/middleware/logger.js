"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    console.log("route called " + req.originalUrl);
    next();
};
exports.logger = logger;
