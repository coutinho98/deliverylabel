import { IsEmail, IsNotEmpty, IsString, MinLength, Matches, ValidateIf } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Matches(RegExp(/.*/), { 
    message: 'As senhas não coincidem.'
  })
  @ValidateIf(o => o.password === o.confirmPassword)
  confirmPassword: string;
}