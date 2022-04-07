import { User, UserModel } from "../schema/user.schema";
import {
  CreateEducationInput,
  CreateDirectionInput,
  CreateWorkExperiencesInput,
  CreateCertificatesInput,
  CreateAwardsInput,
  CreatePersonalityInput,
  CreateAnalyticsInput,
} from "../schema/qualifiications.schema";

class QualificationService {
  async createEducation(input: CreateEducationInput[], userId: User["_id"]) {
    const _id = userId;

    const finalData = input.map((data) => ({ ...data, userId }));
    return UserModel.findByIdAndUpdate(
      _id,
      {
        employee: { education: finalData },
      },
      { new: true }
    );
  }

  async createDirection(input: CreateDirectionInput[], userId: User["_id"]) {
    const _id = userId;

    const finalData = input.map((data) => ({ ...data, userId }));
    return UserModel.findByIdAndUpdate(
      _id,
      {
        employee: { direction: finalData },
      },
      { new: true }
    );
  }

  async createWorkExperiences(
    input: CreateWorkExperiencesInput[],
    userId: User["_id"]
  ) {
    const _id = userId;

    const finalData = input.map((data) => ({ ...data, userId }));
    return UserModel.findByIdAndUpdate(
      _id,
      {
        employee: { workExperiences: finalData },
      },
      { new: true }
    );
  }

  async createCertificates(
    input: CreateCertificatesInput[],
    userId: User["_id"]
  ) {
    const _id = userId;

    const finalData = input.map((data) => ({ ...data, userId }));
    const update = await UserModel.findByIdAndUpdate(
      _id,
      {
        employee: { certificates: finalData },
      },
      { new: true }
    );

    return update;
  }

  async createAwards(input: CreateAwardsInput[], userId: User["_id"]) {
    const _id = userId;

    const finalData = input.map((data) => ({ ...data, userId }));
    return UserModel.findByIdAndUpdate(
      _id,
      {
        employee: { awards: finalData },
      },
      { new: true }
    );
  }

  async createPersonality(
    input: CreatePersonalityInput[],
    userId: User["_id"]
  ) {
    const _id = userId;

    const finalData = input.map((data) => ({ ...data, userId }));
    return UserModel.findByIdAndUpdate(
      _id,
      {
        employee: { personality: finalData },
      },
      { new: true }
    );
  }

  async createAnalytics(input: CreateAnalyticsInput[], userId: User["_id"]) {
    const _id = userId;

    const finalData = input.map((data) => ({ ...data, userId }));
    return UserModel.findByIdAndUpdate(
      _id,
      {
        employee: { analytics: finalData },
      },
      { new: true }
    );
  }
}

export default QualificationService;
