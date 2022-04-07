import {
  getModelForClass,
  prop,
  pre,
  ReturnModelType,
  queryMethod,
  index,
  Ref,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { AsQueryMethod } from "@typegoose/typegoose/lib/types";
import bcrypt from "bcrypt";
const { IsEmail, MaxLength, MinLength } = require("class-validator");
import { Field, InputType, InterfaceType, ObjectType } from "type-graphql";
import { User } from "./user.schema";

enum SchoolType {
  GRADUATE = "graduate",
  UNDERGRADUATE = "undergraduate",
  HIGHSCHOOL = "highschool",
}

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Education {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  school: string;

  @Field(() => Date)
  schoolYear: Date;

  @Field(() => String)
  type: string;

  @Field(() => String)
  course: string;

  @Field(() => String)
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;
}

@InputType()
export class CreateEducationInput {
  @Field(() => String)
  school: string;

  @Field(() => String)
  schoolYear: Date;

  @Field(() => String)
  type: string;

  @Field(() => String)
  course: string;
}

@ObjectType()
export class Direction {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  @Field(() => String)
  question: string;

  @Field(() => String)
  answer: string;
}

@InputType()
export class CreateDirectionInput {
  @Field(() => String)
  question: string;

  @Field(() => String)
  answer: string;
}

@ObjectType()
export class WorkExperiences {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  @Field(() => String)
  industry: string;

  @Field(() => String)
  field: string;

  @Field(() => String)
  position: string;

  @Field(() => Number)
  yearsOfExperience: Number;
}

@InputType()
export class CreateWorkExperiencesInput {
  @Field(() => String)
  industry: string;

  @Field(() => String)
  field: string;

  @Field(() => String)
  position: string;

  @Field(() => Number)
  yearsOfExperience: Number;
}

@ObjectType()
export class Certificates {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  @Field(() => String)
  image: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  name: string;
}

@InputType()
export class CreateCertificatesInput {
  @Field(() => String)
  image: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class Awards {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  @Field(() => String)
  image: string;

  @Field(() => String)
  certificateType: string;

  @Field(() => String)
  certificateName: string;
}

@InputType()
export class CreateAwardsInput {
  @Field(() => String)
  image: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class Personality {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  @Field(() => String)
  score: string;
}

@InputType()
export class CreatePersonalityInput {
  @Field(() => String)
  score: string;
}

@ObjectType()
export class Analytics {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  @Field(() => String)
  score: string;
}

@InputType()
export class CreateAnalyticsInput {
  @Field(() => String)
  score: string;
}
