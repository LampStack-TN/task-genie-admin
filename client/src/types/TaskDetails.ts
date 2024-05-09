export interface TaskDetails {
taskId: number;
  title: string;
  client?: { fullName: string };
  description: string;
  location: string;
  minPrice: number;
  maxPrice: number;
  dueDate: string;
  urgency: string;
  createdAt: string;
  updatedAt: string;
  applications?: Array<{
    id: number;
    taskID: number;
    applicantID: number;
    price: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    applicant: { fullName: string };
  }>;
}
