import { useEffect, useState } from "react";
import { ApiClient } from "../utils/api";
import { Professional } from "../types/Professional";

const api = ApiClient();

const fetchData = async () => {
  try {
    const { data } = await api.get('/admin/professionals');
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const useProfessionalData = () => {
  const [datas, setDatas] = useState<Professional[]>([]);

  useEffect(() => {
    fetchData().then(data => setDatas(data));
  }, []);

  return datas;
};
