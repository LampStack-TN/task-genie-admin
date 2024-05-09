export interface ServiceDetails {
  serviceId: number;
  title: string;
  professional?: { fullName: string };
  description: string;
  location: string;
  price: number;
  availability: number;
  createdAt: string;
  updatedAt: string;
  status: string;
  hirings?: Array<{
    id: number;
    email: number;
    price: number;

    client: { fullName: string };
  }>;
}
