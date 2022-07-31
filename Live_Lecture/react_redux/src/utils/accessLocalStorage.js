export const loadData = (key) => {
    try {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      return data;
    } catch (error) {
      return undefined;
    }
  };
  
  export const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };