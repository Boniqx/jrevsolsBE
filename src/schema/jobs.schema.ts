import { getModelForClass, index, modelOptions, prop, Ref, Severity } from "@typegoose/typegoose";
import { Field, InputType, ObjectType } from "type-graphql";
import { User } from "./user.schema";

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Application {
  @Field(() => String)
  @prop({ required: true, ref: () => User })
  user: Ref<User>;

  @Field(() => String)
  @prop({ required: true })
  message: string;

  @Field(() => String)
  @prop({ required: true })
  videoIntroduction: string;
}

@InputType()
export class ApplyJobInput {
  @Field(() => String)
  message: string;

  @Field(() => String)
  videoIntroduction: string;

  @Field(() => String)
  @prop({ required: true, ref: () => Jobs })
  jobId: Ref<Jobs>;
}

@ObjectType()
export class Jobs {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true, ref: () => User })
  owner: Ref<User>;

  @Field(() => String, { nullable: true })
  @prop({ required: false, ref: () => User })
  hired: Ref<User>;

  @Field(() => [Application], { nullable: true })
  @prop({ required: false })
  application: Application[];

  @Field(() => String, { nullable: true })
  @prop({ required: false, ref: () => User })
  interviewing: Ref<User>;

  @Field(() => String)
  @prop({ required: true })
  name: string;

  @Field(() => String)
  @prop({ required: true })
  description: string;

  @Field(() => Number)
  @prop({ required: true })
  numberToHire?: Number;

  @Field(() => String)
  @prop({ required: true })
  jobType: string;
}

@InputType()
export class CreateJobInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Number)
  numberToHire: Number;

  @Field(() => String)
  jobType: string;
}

export const JobsModel = getModelForClass<typeof Jobs>(Jobs);
