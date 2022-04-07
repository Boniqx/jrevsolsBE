import UserResolver from "./user.resolver";
import ProductResolver from "./product.resolver";
import QualificationResolver from "./qualifications.resolver";
import JobsResolver from "./jobs.resolver";

export const resolvers = [
  UserResolver,
  ProductResolver,
  QualificationResolver,
  JobsResolver,
] as const;
