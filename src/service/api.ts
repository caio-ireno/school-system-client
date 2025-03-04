const API_URL = "https://school-system-spi.onrender.com/api";

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${API_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar ${endpoint}: ${response.statusText}`);
  }

  return response.json();
};
