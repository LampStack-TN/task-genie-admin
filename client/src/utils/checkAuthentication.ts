import { ApiClient } from "./api";
const checkAuthentication = async () => {
  if (await localStorage.getItem("token")) {
    try {
      const { } = await ApiClient().get("admin/verify-token");
      
    } catch (error) {
      
      await localStorage.clear()
    }
  }
};

export default checkAuthentication;
