import { useEffect, useState } from 'react';
import { ApiClient } from '../utils/api';
import { Service } from '../types/Services';

const api = ApiClient();

export const useServicesData = () => {
  const [services, setServices] = useState<Service[]>([]);

  const fetchData = async () => {
    try {
      const response = await api.get('/admin/services');
      return response.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      if (data) {
        setServices(data);
      }
    });
  }, []);

  return services;
};
