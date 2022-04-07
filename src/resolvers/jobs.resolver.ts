import { ApplyJobInput } from "./../schema/jobs.schema";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { CreateJobInput, Jobs } from "../schema/jobs.schema";
import JobsService from "../service/jobs.service";
import Context from "../types/context";

@Resolver()
export default class JobsResolver {
  constructor(private jobsService: JobsService) {
    this.jobsService = new JobsService();
  }

  @Authorized()
  @Mutation(() => Jobs)
  createJob(@Arg("input") input: CreateJobInput, @Ctx() context: Context) {
    const user = context.user!;
    return this.jobsService.createJob({ ...input, owner: user?._id });
  }

  @Authorized()
  @Mutation(() => Jobs)
  applyJob(@Arg("input") input: ApplyJobInput, @Ctx() context: Context) {
    const user = context.user!;
    return this.jobsService.applyJob({ ...input, user: user?._id });
  }

  @Query(() => [Jobs])
  jobs() {
    return this.jobsService.findJobs();
  }

  // @Query(() => Jobs)
  // product(@Arg("input") input: GetJobInput) {
  //   return this.jobsService.findSingleJob(input);
  // }
}
