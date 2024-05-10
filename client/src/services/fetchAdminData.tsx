import { useEffect, useState } from 'react';
import { ApiClient } from '../utils/api';
import { Admin } from '../types/Admin';

const api = ApiClient();

const fetchData = async () => {
  try {
    const { data } = await api.get('/admin/getAdmin');
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const useAdminData = () => {
  const [adminData, setAdminData] = useState<Admin>({});

  useEffect(() => {
    fetchData().then((data) => {
      if (data) setAdminData(data);
    });
  }, []);

  return adminData;
};
