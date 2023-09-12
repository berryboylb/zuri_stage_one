"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidPathHandler = exports.errorResponder = void 0;
const errorResponder = (error, req, res, next) => {
    res.header("Content-Type", "application/json");
    const status = error.statusCode || 400;
    console.log(`An error Occurred: ${error.message}`);
    res.status(status).json({
        status: "error",
        message: error.message,
        data: {
            statusCode: status,
            timestamp: new Date().toISOString(),
        },
    });
};
exports.errorResponder = errorResponder;
const invalidPathHandler = (req, res, next) => {
    res.status(404).send(req.originalUrl + " is an invalid path");
};
exports.invalidPathHandler = invalidPathHandler;
