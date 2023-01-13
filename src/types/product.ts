export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ProductsData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Product[];
  support: {
    url: string;
    text: string;
  };
}
