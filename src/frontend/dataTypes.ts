interface UserResponse {
  userName: string;
  userId: string;
  envelopes: EnvelopeResponse[];
  income: number;
}
interface EnvelopeResponse {
  userId: string;
  id: string;
  name: string;
  value: number;
}