import {Module, ValidationPipe} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {MercuriusDriver, MercuriusDriverConfig} from "@nestjs/mercurius";
import * as path from 'path';
import {UserModule} from '@okhino/api/feature-user';
import {APP_PIPE} from "@nestjs/core";

const validationProvider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe()
}

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: path.join(__dirname,'./autogenerated-schema.gql'),
    }),
    UserModule,
  ],
  controllers: [],
  providers: [validationProvider],
})
export class AppModule {}
