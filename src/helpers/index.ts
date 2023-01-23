import axios, { AxiosResponse } from "axios";
import { ProductsData } from "../types";

export const deleteNonNumbers = (str: string): string => {
  return str.replace(/[^0-9]/g, "");
};

const API = "https://reqres.in/api/products";

export async function productsDataReguest() {
  const response: AxiosResponse<ProductsData> = await axios.get(API);

  return response.data;
}
