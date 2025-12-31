import { publicApiRequest } from './client';

export interface GoogleFormSubmitRequest {
  privacyAgreement: string;
  desiredGame: string;
  valorantClass?: string;
  valorantTier?: string;
  valorantPosition?: string;
  overwatchClass?: string;
  overwatchTier?: string;
  overwatchPosition?: string;
  gameAccount: string;
  name: string;
  gender: string;
  birthDate: string;
  address: string;
  phoneNumber: string;
  discordId: string;
  guardianName?: string;
  guardianPhoneNumber?: string;
}

export interface GoogleFormSubmitResponse {
  message?: string;
}

// Google Form 제출
export const submitGoogleForm = async (data: GoogleFormSubmitRequest): Promise<GoogleFormSubmitResponse> => {
  return publicApiRequest<GoogleFormSubmitResponse>('/api/google-form/submit', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

