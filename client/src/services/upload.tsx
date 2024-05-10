import { useState } from 'react';
import { ApiClient } from '../utils/api';

export const useUploadHandling = () => {
    const [imagePreview, setImagePreview] = useState<File | null>(null);
    

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files&& e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result as any);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        
    };

    const handleAvatar = async () => {
            
        try {
            if (!imagePreview) {
                console.error("No image selected.");
                return;
            }
            let token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('avatar',imagePreview);

            
            await ApiClient().put(`/admin/updateAvatar/${10019}`, formData, { headers: { "token": token, "Content-Type": "multipart/form-data" } });
           
            console.log("Avatar updated successfully");
        } catch (err) {
            console.error("Error updating avatar:", err);
        }
    };

    return {
        handleImageChange,
        handleAvatar,
    };
};
