import api from "./api";

export async function fetchChargers() {
  try {
    const response = await api.get("/chargers"); // Axios automatically parses JSON

    // console.log("Chargers data:", response);
    console.log("Chargers data:", response.data.chargers);
    return response.data.chargers; // No need for manual `.json()` parsing
  } catch (error) {
    console.error("Error fetching chargers:", error);
    throw error; // Re-throw to handle it where the function is called
  }
}

export async function fetchCharger(id) {
  try {
    const response = await api.get(`/chargers/${id}`);
    console.log("charger :", response.data.charger);
    return response.data.charger;
  } catch (error) {
    console.error("Error fetching charger:", error);
    throw error;
  }
}

export async function createCharger(data) {
  try {
    const response = await api.post("/chargers", data);
    console.log("Charger created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating charger:", error.response?.data || error);
    throw error;
  }
}
