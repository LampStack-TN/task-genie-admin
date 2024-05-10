import { useState } from 'react';
import { ApiClient } from '../utils/api';

export const useUploadHandling = () => {
    const [imagePreview, setImagePreview] = useState<File | null>(null);
    console.log("imagePreview :" ,  imagePreview)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setImagePreview(file);
        }
    };

    const handleAvatar = async () => {
        try {
            if (!imagePreview) {
                console.error("No image selected.");
                return;
            }

            const formData = new FormData();
            console.log("formData :" , formData)
            formData.append("image", imagePreview);

            await ApiClient().put(`/admin/updateAvatar/${10019}`, formData);
            console.log("Avatar updated successfully");
        } catch (err) {
            console.error("Error updating avatar:", err);
        }
    };

    return {
        imagePreview,
        handleImageChange,
        handleAvatar,
    };
};
