export class CreateUserDto {
  externalId: number;
  name: string;
  sex: string;
  cellPhone: string;
  password?: string;
  birth: string;
  marketingConsent: boolean;
  profileImage?: string;
  introduction?: string;
  religion?: string;
  university: string;
  enrollmentVerification: string;
}
