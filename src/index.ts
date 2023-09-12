import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import limiter from "./middleware/ratelimiter";
import routes from "./routes";
import { logger, errorResponder, invalidPathHandler } from "./middleware";
import { daysOfWeek } from "./utils";
import { Dto } from "./validators";
import { validateQuery } from "./middleware/validator";

dotenv.config();
const port = process.env.PORT || 8000;
const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: false } as any));
app.use(limiter());
app.use(logger);

//these are our routes
app.use("/api/v1", routes);
app.get("/", validateQuery(Dto), (_req: Request, res: Response) => {
  const { slack_name, track } = _req.query;
  res.status(200).json({
    slack_name,
    current_day: daysOfWeek[new Date().getDay()],
    utc_time: new Date(),
    track,
    github_file_url:
      "https://github.com/berryboylb/zuri_stage_one/blob/main/src/index.ts",
    github_repo_url: "https://github.com/berryboylb/zuri_stage_one",
    status_code: 200,
  });
});

app.use(errorResponder);
app.use(invalidPathHandler);

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
