import { Request, Response, NextFunction } from "express";
import SampleService from "../services/sampleService";
import AppError from "../utils/error";

const exportResult = {
  async sampleRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const sample: any = await SampleService.sampleDbQuery(req.body);
      if (sample.err) throw new AppError(400, "some error occured");
      return res.status(201).json({
        status: "Success",
        message: "Successfully sampled something",
        data: {
          sample,
        },
      });
    } catch (error) {
      console.log("Error creating admin user " + error);
    }
  },
};
export default exportResult;
