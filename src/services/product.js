import { apiClient } from "./config";

export const apiGetProduct = async () => {
    return await apiClient.get('/api/product');
}
export const apiAddProduct = async (payload) =>
    apiClient.post("/product/", payload);

export const apiGetOneProduct = async (id) =>
    apiClient.get(`/api/product/${id}`);

export const apiEditProduct = async (id, payload) => {
    return await apiClient.put(`/api/product/${id}`, payload);
};

export const apiDeleteProduct = async (productID) => {
    return await apiClient.delete(`/api/product/${productID}`);
};