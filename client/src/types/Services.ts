export interface Service {
    id: number;
    title: string;
    location: string;
    price:number
    professional: {
        fullName: string;
        email: string;
    };
    skills: {
        name: string;
    }[];
    hiringCount: number;
}