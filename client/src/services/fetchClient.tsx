import { useEffect, useState } from "react";
import { Clients } from "../types/Clients";
import { ApiClient } from "../utils/api";

const api = ApiClient();

const fetchData = async () => {
  try {
    const { data } = await api.get('/admin/clients');
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const useClientData = () => {
  const [datas, setDatas] = useState<Clients[]>([]);

  useEffect(() => {
    fetchData().then(data => setDatas(data));
  }, []);

  return datas;
};
