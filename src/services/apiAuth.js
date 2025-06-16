import api from "./api";

export async function login({ email, password }) {
  try {
    console.log(email, password);
    const response = await api.post("/user/login", { email, password });

    if (response.data.success) {
      console.log(response.data.data);
      return response.data.data;
    } else {
      throw new Error(response.data.error || "Login failed");
    }
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
}
