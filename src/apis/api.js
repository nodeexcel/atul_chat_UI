import axios from "axios";

export const fetchResponse = async (query) => {
  if (!query.trim()) return { error: "Query cannot be empty" };

  try {
    const response = await axios.post("http://116.202.210.102:8005/suggest-business", { query });
    
    return { response: response.data.suggestions || "No response from API." };
  } catch (error) {
    console.error("API Error:", error);
    return { error: "Error fetching response. Try again." };
  }
};
