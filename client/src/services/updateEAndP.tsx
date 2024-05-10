import { useState } from 'react';
import { ApiClient } from '../utils/api';

export const useFormHandling = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleCurrentPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentPassword(value);
  };

  const handleEmailAndPassword = async () => {
    try {
      await ApiClient().put(`/admin/update/${10019}`, {
        currentPassword: currentPassword,
        newPassword: password,
        newEmail: email,
      });
      alert("Updated successfully");
    } catch (err) {
      console.error("handleEmailAndPassword failed:", err);
    }
  };

  return {
    handleEmailChange,
    handlePassChange,
    handleCurrentPassChange,
    handleEmailAndPassword,
  };
};
