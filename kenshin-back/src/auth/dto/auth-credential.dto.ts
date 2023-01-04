import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(40)
  @Matches(/^[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]*$/, {
    message: 'password only accepts english and number, specials',
  })
  password: string;

  @IsString()
  providerId?: string;

  @IsString()
  provider?: string;

  @IsString()
  email?: string;
}