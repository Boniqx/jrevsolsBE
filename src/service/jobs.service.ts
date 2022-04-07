import mongoose from "mongoose";
import {
  Jobs,
  CreateJobInput,
  JobsModel,
  ApplyJobInput,
  Application,
} from "../schema/jobs.schema";
import { User } from "../schema/user.schema";

class JobsService {
  async createJob(input: CreateJobInput & { owner: User["_id"] }) {
    return await JobsModel.create(input);
  }

  async applyJob(input: ApplyJobInput & { user: User["_id"] }) {
    const _id = input.jobId;

    const jobToApply = await JobsModel.findById(_id);
    const jobToApplyAplications = jobToApply?.application || [];
    console.log("jobToApply", jobToApply);
    console.log("===========");
    console.log("jobToApply?.application", jobToApply?.application);
    console.log("jobToApplyAplications", jobToApplyAplications.push(input));
    console.log("input", input);
    console.log("pushedJobsApplication", jobToApplyAplications);

    return await JobsModel.findByIdAndUpdate(
      _id,
      { application: jobToApplyAplications },
      { new: true }
    );
  }

  async findJobs() {
    // Pagination login
    return JobsModel.find().lean();
  }

  // async findSingleJob(input: GetJobInput) {
  //   return JobsModel.findOne(input).lean();
  // }
}

export default JobsService;
