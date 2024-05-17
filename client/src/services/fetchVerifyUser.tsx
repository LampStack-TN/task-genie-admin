import { ApiClient } from '../utils/api';

export const acceptProfessional = async (id: number) => {
  try {
    await ApiClient().put(`/admin/users/${id}/verify`);
  } catch (error) {
    console.error('Error accepting professional:', error);
  }
};

export const rejectProfessional = async (id: number) => {
  try {
    await ApiClient().put(`/admin/users/${id}/reject`);
  } catch (error) {
    console.error('Error rejecting professional:', error);
  }
};
