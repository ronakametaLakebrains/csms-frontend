import api from "./api";

export async function getOwners() {
  try {
    const response = await api.get("/user");
    console.log("Owners data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Owners:", error);
    throw error;
  }
}

export async function getOwnerById(id) {
  try {
    const response = await api.get(`/owner/${id}`);
    console.log("Owner:", response.data.data);
    return response.data.data.customer;
  } catch (error) {
    console.error("error fetching Owner: ", error);
    throw error;
  }
}

export async function createOwner(data) {
  try {
    const response = await api.post("/user", data);
    console.log("owner created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating owner:", error.response?.data || error);
    throw error;
  }
}
