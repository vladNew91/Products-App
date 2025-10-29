import axios, { AxiosResponse } from "axios";
import { ProductsData } from "../types";

export const deleteNonNumbers = (str: string): string => {
  return str.replace(/[^0-9]/g, "");
};

const API = "https://reqres.in/api/products";

export async function productsDataReguest() {
  const response: AxiosResponse<ProductsData> = await axios({
    method: "get",
    url: API,
    headers: { "x-api-key": "reqres-free-v1" },
  });

  return response.data;
}
