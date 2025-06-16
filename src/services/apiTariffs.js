import api from "./api";

export async function getTariffs() {
  try {
    const response = await api.get("/tariff");
    console.log("tariff", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Tariffs:", error);
    throw error;
  }
}

export async function createTariff(data) {
  try {
    const response = await api.post("/tariff", data);
    console.log("Tariff created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating tariff:", error.response?.data || error);
    throw error;
  }
}
