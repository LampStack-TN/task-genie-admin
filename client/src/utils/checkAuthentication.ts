import { ApiClient } from "./api";
const checkAuthentication = async () => {
  if (await localStorage.getItem("token")) {
    try {
      const response = await ApiClient().get("auth/verify-token");
      if (response.status === 200) {
      } else {
        await localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      await localStorage.removeItem("token");
      
    }
  }
};

export default checkAuthentication;
