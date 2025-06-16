import api from "./api";

export async function getStations() {
  try {
    const response = await api.get("chargingStations");
    console.log("Stations data:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Owners:", error);
    throw error;
  }
}

export async function createStation(data) {
  try {
    const response = await api.post("/chargingStations", data);
    console.log("Station created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating station:", error.response?.data || error);
    throw error;
  }
}
