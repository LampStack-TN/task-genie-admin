import { useEffect, useState } from "react";
import { ApiClient } from "../utils/api";
import { Professional } from "../types/Professional";

const api = ApiClient();

const fetchData = async () => {
  try {
    const { data } = await api.get('/admin/verified');
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const useVerifiedData = () => {
  const [verified, setVerified] = useState<Professional[]>([]);

  useEffect(() => {
    fetchData().then(data => setVerified(data));
  }, []);

  return verified;
};
