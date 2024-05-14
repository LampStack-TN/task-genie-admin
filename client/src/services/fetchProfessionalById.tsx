import { useState, useEffect } from 'react';
import { ApiClient } from '../utils/api';
import { ProfessionDetails } from '../types/ProfessionDetails';
export const useProfileById = (profileId: any) => {
  const [professional, setProfessional] = useState<ProfessionDetails | null>(
    null,
  );

  useEffect(() => {
    if (profileId) {
      ApiClient()
        .get(`/admin/professionals/${profileId}`)
        .then((response) => {
          setProfessional(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [profileId]);

  return { professional };
};
