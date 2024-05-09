import { useState, useEffect } from 'react';
import { ApiClient } from '../utils/api';
import ServiceDetails from '../types/ServiceDetails';
const api = ApiClient();

export const useServiceById = (serviceId: string) => {
  const [service, setService] = useState<ServiceDetails>({});

  useEffect(() => {
    if (serviceId) {
      api
        .get(`/admin/services/${serviceId}`)
        .then((response) => {
            setService(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [serviceId]);

  return { service };
};
