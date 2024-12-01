import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(4)
  password: string;
}
