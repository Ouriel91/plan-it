const URL = "http://localhost:8085";
const headers = { "Content-Type": "application/json" };

export async function fetchPlans() {
    try {
      const res = await fetch(`${URL}/item`);
  
      if (res.status !== 200) {
        throw new Error(" Error While fetching items");
      }
  
      const data = await res.json();
  
      return data;
    } catch (error) {
      throw new Error("failed to fetch items");
      
    }
  }