import Sample from "../schemas";
import dotenv from "dotenv";
dotenv.config();

const exportResult = {
  async sampleDbQuery(reqBody: any) {
    const createdSample = new Sample(reqBody);
    return createdSample.save();
  },
};
export default exportResult;
