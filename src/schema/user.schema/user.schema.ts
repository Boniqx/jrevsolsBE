import {
  getModelForClass,
  prop,
  pre,
  Ref,
  ReturnModelType,
  queryMethod,
  index,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { WhatIsIt } from "@typegoose/typegoose/lib/internal/constants";
import { AsQueryMethod } from "@typegoose/typegoose/lib/types";
import { ApolloError } from "apollo-server";
import bcrypt from "bcrypt";
const { IsEmail, MaxLength, MinLength } = require("class-validator");
import { Field, InputType, ObjectType, registerEnumType } from "type-graphql";
import {
  Awards,
  Certificates,
  Direction,
  Education,
  Personality,
  WorkExperiences,
} from "../qualifiications.schema";

@ObjectType()
class Employer {
  @Field(() => String)
  companyName: string;

  @Field(() => String)
  companyEmail: string;

  @Field(() => String)
  companyPhoneNumber: string;

  @Field(() => String)
  companyLogo: string;

  @Field(() => String)
  jobs: string;

  @Field(() => String)
  applications: string;
}

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Employee {
  @Field(() => String)
  @prop({ required: false })
  firstName: string;

  @Field(() => String)
  @prop({ required: false })
  middleName: string;

  @Field(() => String)
  @prop({ required: false })
  lastName: string;

  @Field(() => String)
  @prop({ required: false })
  birthday: string;

  @Field(() => String)
  @prop({ required: false })
  address1: string;

  @Field(() => String)
  @prop({ required: false })
  address2: string;

  @Field(() => String)
  @prop({ required: false })
  phoneNumber: string;

  @Field(() => String)
  @prop({ required: false })
  socialMedia: string;

  @Field(() => String)
  @prop({ required: false })
  image: string;

  @Field(() => [WorkExperiences])
  @prop({ required: false })
  workExperiences: WorkExperiences[];

  @Field(() => Personality)
  @prop({ required: false, ref: () => Personality })
  personality: Personality | null;

  @Field(() => Direction)
  @prop({ required: false, ref: () => Direction })
  direction: Direction | null;

  @Field(() => [Education!]!, { nullable: "itemsAndList" })
  @prop(
    {
      required: false,
    },
    WhatIsIt.ARRAY
  )
  education: [Education];

  @Field(() => [Certificates])
  @prop({ required: false })
  certificates: Certificates[];

  @Field(() => [Awards])
  @prop({ required: false })
  awards: Awards[];

  @Field(() => String)
  @prop({ required: false })
  applications: string;
}

enum UserType {
  JOB_SEEKER = "job_seeker",
  EMPLOYER = "employer",
  ADMIN = "admin",
}

registerEnumType(UserType, {
  name: "UserType", // this one is mandatory
  description: "Types of user (admin, employer, employee)", // this one is optional
});

function findByEmail(
  this: ReturnModelType<typeof User, QueryHelpers>,
  email: User["email"]
) {
  return this.findOne({ email });
}

interface QueryHelpers {
  findByEmail: AsQueryMethod<typeof findByEmail>;
}

@pre<User>("save", async function () {
  // Check that the password is being modified
  const salt = await bcrypt.genSaltSync(10);

  const hash = await bcrypt.hashSync(this.password, salt);

  this.password = hash;
})
@index({ email: 1 })
@queryMethod(findByEmail)
@ObjectType()
export class User {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true })
  userName: string;

  @Field(() => UserType)
  @prop({ enum: UserType })
  userType: UserType;

  @Field(() => String)
  @prop({ required: true })
  email: string;

  @prop({ required: true })
  password: string;

  @Field(() => Employee, { nullable: true })
  @prop({ required: false })
  employee: Employee;

  @Field(() => Employer)
  @prop({ required: false })
  employer: Employer;
}

export const UserModel = getModelForClass<typeof User, QueryHelpers>(User);

@InputType()
export class CreateUserInput {
  @Field(() => String)
  userName: string;

  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(6, {
    message: "password must be at least 6 characters long",
  })
  @MaxLength(50, {
    message: "password must not be longer than 50 characters",
  })
  @Field(() => String)
  password: string;

  @Field(() => UserType)
  @prop({ enum: UserType })
  userType: UserType;
}

@InputType()
export class CreateBasicInformationInput {
  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  middleName: string;

  @Field(() => String, { nullable: true })
  lastName: string;

  @Field(() => String, { nullable: true })
  birthday: string;

  @Field(() => String, { nullable: true })
  address1: string;

  @Field(() => String, { nullable: true })
  address2: string;

  @Field(() => String, { nullable: true })
  phoneNumber: string;

  @Field(() => String, { nullable: true })
  socialMedia: string;

  @Field(() => String, { nullable: true })
  image: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
