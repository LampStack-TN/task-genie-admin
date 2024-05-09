import { useState, useEffect } from 'react';
import { ApiClient } from '../utils/api';
import { TaskDetails } from '../types/TaskDetails';
const api = ApiClient();

export const useTaskById = (taskId: string) => {
  const [task, setTask] = useState<TaskDetails>({});

  useEffect(() => {
    if (taskId) {
      api
        .get(`/admin/tasks/${taskId}`)
        .then((response) => {
          setTask(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [taskId]);

  return { task };
};
