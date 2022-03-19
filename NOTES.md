1. Initalise the project

   - npm init

2. Initalise TypeScript

   - npx typescript --init

3. Install dev dependencies

   - npm add typescript ts-node-dev @types/bcrypt @types/jsonwebtoken @types/cookie-parser @types/config -D

4. Install dependencies

   - npm add type-graphql apollo-server graphql@15.x reflect-metadata @typegoose/typegoose mongoose class-validator bcrypt jsonwebtoken cookie-parser nanoid config dotenv

5. Update tsconfig to include:

```json
{
  "target": "es2018",
  "module": "commonjs",
  "lib": ["es2018", "esnext.asynciterable"],
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
  "strictPropertyInitialization": false
}
```
