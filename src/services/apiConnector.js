import api from "./api";

export async function fetchConnector(id) {
  try {
    const response = await api.get(`/connector/${id}`);
    console.log("connector :", response.data);
    // console.log("connector :", response);
    return response.data.connector;
  } catch (error) {
    console.error("Error fetching connector:", error);
    throw error;
  }
}

export async function createConnector(data) {
  try {
    const response = await api.post("/connector", data);
    console.log("connector created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating Connector:", error.response?.data || error);
    throw error;
  }
}
