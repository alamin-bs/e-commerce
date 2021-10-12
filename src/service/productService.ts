import http from "./httpService";
import { baseUrl } from "../config.json";
import Product from "@/interface/product";

const getAllProduct = baseUrl + "products";
const getProductByCategory = baseUrl + "products/category/";
const getProdById = baseUrl + "products/";

export async function getProducts(): Promise<Product[]> {
  try {
    const { data } = await http.get<Product[]>(getAllProduct);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  try {
    const { data } = await http.get<Product[]>(getProductByCategory + category);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getProductById(id: number): Promise<Product> {
  try {
    const { data } = await http.get<Product>(getProdById + id);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default {
  getProducts,
  getProductsByCategory,
  getProductById,
};
