import { IsEmail } from 'class-validator';

export class DeleteAccountDto {
    @IsEmail({}, { message: '유효한 이메일 형식이 아닙니다.' })
    email: string;
}