"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuery = exports.validateSchema = void 0;
const validateSchema = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.parseAsync({
            body: req.body,
            // query: req.query,
            // params: req.params,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json({
            status: "error",
            message: `invalid body parameter(s)`,
            data: {
                error: error.issues,
                statusCode: 400,
                timestamp: new Date().toISOString(),
            },
        });
    }
});
exports.validateSchema = validateSchema;
const validateQuery = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.parseAsync({
            query: req.query,
            // body: req.body,
            // params: req.params,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json({
            status: "error",
            message: `invalid query parameter(s)`,
            data: {
                error: error.issues,
                statusCode: 400,
                timestamp: new Date().toISOString(),
            },
        });
    }
});
exports.validateQuery = validateQuery;
