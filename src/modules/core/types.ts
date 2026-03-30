export interface ServiceResult<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}
