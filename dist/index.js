"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const ratelimiter_1 = __importDefault(require("./middleware/ratelimiter"));
const middleware_1 = require("./middleware");
const utils_1 = require("./utils");
const validators_1 = require("./validators");
const validator_1 = require("./middleware/validator");
dotenv_1.default.config();
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json({ extended: false }));
app.use((0, ratelimiter_1.default)());
app.use(middleware_1.logger);
app.get("/", (_req, res) => {
    res.send("Hello Zuri mentor");
});
app.get("/api", (0, validator_1.validateQuery)(validators_1.Dto), (_req, res) => {
    const { slack_name, track } = _req.query;
    res.status(200).json({
        slack_name,
        current_day: utils_1.daysOfWeek[new Date().getDay()],
        utc_time: new Date().toISOString().split(".")[0] + "Z",
        track,
        github_file_url: "https://github.com/berryboylb/zuri_stage_one/blob/main/src/index.ts",
        github_repo_url: "https://github.com/berryboylb/zuri_stage_one",
        status_code: 200,
    });
});
app.use(middleware_1.errorResponder);
app.use(middleware_1.invalidPathHandler);
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
