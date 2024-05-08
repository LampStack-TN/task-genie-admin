import { useEffect, useState } from "react";
import { ApiClient } from "../utils/api";
import { Task } from "../types/Task";

const api = ApiClient();

const fetchData = async () => {
  try {
    const { data } = await api.get('/admin/AllTasks');
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const useTasksData = () => {
  const [datas, setDatas] = useState<Task[]>([]);

  useEffect(() => {
    fetchData().then(data => setDatas(data));
  }, []);

  return datas;
};
