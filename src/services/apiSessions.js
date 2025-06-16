import api from "./api";

export async function getSessions() {
  try {
    const response = await api.get("/sessions");
    console.log("Sessions data:", response.data);
    return response.data.data.sessions;
  } catch (error) {
    console.error("Error fetching sessions:", error);
    throw new Error(
      `Error: ${error.response?.status} ${error.response?.statusText}`
    );
  }
}
