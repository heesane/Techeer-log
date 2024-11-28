import axiosInstance from '../../../shared/api/axiosInstance.ts';
import { PasswordData } from '../types/PasswordData.ts';
export const patchPassword = async (passwordData: PasswordData) => {
  const response = await axiosInstance.patch('/api/v1/members/password', passwordData);

  return response.data.data;
};
