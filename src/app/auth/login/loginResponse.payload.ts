export interface LoginResponse {
  authToken: string;
  role: string;
  refreshToken: string;
  expiresAt: Date;
  username: string;
}
