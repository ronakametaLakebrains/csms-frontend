import axios from "axios";
import api from "./api";

export async function fetchDrivers() {
  try {
    const response = await api.get("/drivers"); // Axios automatically parses JSON

    // console.log("Drivers data:", response);
    console.log("Drivers data:", response.data.data.drivers);
    return response.data.data.drivers; // No need for manual `.json()` parsing
  } catch (error) {
    console.error("Error fetching drivers:", error);
    throw error; // Re-throw to handle it where the function is called
  }
}

export async function fetchDriverById(id){
  try{
    const response = await api.get(`/driver/${id}`)
    // console.log(response.data.data.driver)
    return response.data.data.driver;
  } catch (error){
    console.error(error);
    throw error;
  }
}