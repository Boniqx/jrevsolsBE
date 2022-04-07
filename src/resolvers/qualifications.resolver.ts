import {
  Arg,
  Args,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import {
  CreateProductInput,
  GetProductInput,
  Product,
} from "../schema/product.schema";
import {
  CreateEducationInput,
  CreateDirectionInput,
  CreateWorkExperiencesInput,
  CreateCertificatesInput,
  CreateAwardsInput,
  CreatePersonalityInput,
  CreateAnalyticsInput,
} from "../schema/qualifiications.schema";
import { User } from "../schema/user.schema";
import QualificationService from "../service/qualification.service";
import Context from "../types/context";

@Resolver()
export default class QualificationResolver {
  constructor(private qualificationService: QualificationService) {
    this.qualificationService = new QualificationService();
  }

  @Authorized()
  @Mutation(() => User)
  createEducation(
    @Arg("input", () => [CreateEducationInput])
    input: CreateEducationInput[],
    @Ctx() context: Context
  ) {
    const user = context.user!;
    const userId = user?._id;
    return this.qualificationService.createEducation(input, userId);
  }

  @Authorized()
  @Mutation(() => User)
  createDirectionInput(
    @Arg("input", () => [CreateDirectionInput])
    input: CreateDirectionInput[],
    @Ctx() context: Context
  ) {
    const user = context.user!;
    const userId = user?._id;
    return this.qualificationService.createDirection(input, userId);
  }

  @Authorized()
  @Mutation(() => User)
  createWorkExperiences(
    @Arg("input", () => [CreateWorkExperiencesInput])
    input: CreateWorkExperiencesInput[],
    @Ctx() context: Context
  ) {
    const user = context.user!;
    const userId = user?._id;
    return this.qualificationService.createWorkExperiences(input, userId);
  }

  @Authorized()
  @Mutation(() => User)
  createCertificates(
    @Arg("input", () => [CreateCertificatesInput])
    input: CreateCertificatesInput[],
    @Ctx() context: Context
  ) {
    const user = context.user!;
    const userId = user?._id;
    console.log(input);
    return this.qualificationService.createCertificates(input, userId);
  }

  @Authorized()
  @Mutation(() => User)
  createAwards(
    @Arg("input", () => [CreateAwardsInput])
    input: CreateAwardsInput[],
    @Ctx() context: Context
  ) {
    const user = context.user!;
    const userId = user?._id;
    return this.qualificationService.createAwards(input, userId);
  }

  @Authorized()
  @Mutation(() => User)
  createPersonality(
    @Arg("input", () => [CreatePersonalityInput])
    input: CreatePersonalityInput[],
    @Ctx() context: Context
  ) {
    const user = context.user!;
    const userId = user?._id;
    return this.qualificationService.createPersonality(input, userId);
  }

  @Authorized()
  @Mutation(() => User)
  createAnalytics(
    @Arg("input", () => [CreateAnalyticsInput])
    input: CreateAnalyticsInput[],
    @Ctx() context: Context
  ) {
    const user = context.user!;
    const userId = user?._id;
    return this.qualificationService.createAnalytics(input, userId);
  }
}
