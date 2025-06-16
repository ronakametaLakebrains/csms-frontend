import { SERVER } from "../constants/constant";

export async function getAnalytics() {
  const response = await fetch(`${SERVER}/api/analytics`);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const analytics = await response.json();
  console.log("analytics data:", analytics);
  return analytics;
}
