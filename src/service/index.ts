const urlApi = "https://rahma-ridho.site/api/"
async function post(url: string, data: Record<string, any>): Promise<any> {
    try {
      const response = await fetch(urlApi+url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  async function get(url: string): Promise<any> {
    try {
      const response = await fetch(urlApi+url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  export default {
    post,
    get,
  };