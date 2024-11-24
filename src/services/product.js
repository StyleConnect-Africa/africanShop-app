import { apiClient } from "./Config";
export const apiGetProduct = async () => {
  return await apiClient.get("/product/list");
};
export const apiAddProduct = async (payload) =>
  apiClient.post("/product/create", payload);

export const apiGetOneProduct = async (id) => apiClient.get(`/product/${id}`);

export const apiEditProduct = async (id, payload) => {
  return await apiClient.patch(`/product/${id}`, payload);
};

export const apiDeleteProduct = async (productID) => {
  return await apiClient.delete(`/product/${productID}`);
};
