export const API_URL = "https://school-system-spi.onrender.com/api";

// Função fetchData para lidar com as requisições
export const fetchData = async (endpoint: string, options?: RequestInit) => {
  const response = await fetch(`${API_URL}/${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`Erro ao buscar ${endpoint}: ${response.statusText}`);
  }

  return response.json();
};
