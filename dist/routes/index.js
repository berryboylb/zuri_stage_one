"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Sample APIs
const sample_1 = __importDefault(require("./sample"));
router.use('/samples', sample_1.default);
// Health-check Endpoint
router.get('/health', (_req, res) => { res.send('200'); });
exports.default = router;
