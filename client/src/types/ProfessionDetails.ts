export interface ProfessionDetails {
  fullName: string;
  email: string;
  role: string;
  phone?: string;
  birthdate?: string;
  city: string;
  address: string;
  zipcode: string;
  profile?: {
    jobTitle: string;
    bio: string;
    isVerified: boolean;
    officialDocument?: string;
    cinRecto?: string;
    cinVerso?: string;
  };
  services?: Array<{
    id: number;
    title: string;
  }>;
}
