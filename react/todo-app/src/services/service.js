const apiUrl = 'http://localhost:3000/tasks';

// Get tasks from backend API
export const getList = async () => {
    try {
      const response = await fetch(apiUrl,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  }

  export const addItem = async (body) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  }

  export const updateItem = async (updatedTasks) => {
    try {
      const response = await fetch(`${apiUrl}/${updatedTasks.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTasks)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  }

  export const deleteItem = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  }
  