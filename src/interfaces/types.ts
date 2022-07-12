export interface Product {
  id: string;
  name: string;
  price: string | number;
  qty: string | number;
  sum: number;
}

export interface Header {
  text: string;
  align?: string;
  value: string;
}
