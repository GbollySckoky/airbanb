export type Products = {
    category: string;
      id: number;
      images: string[];
      img: string;
      price: number;
      productDetails: string;
      productName: string;
      rate: string;
      
  }
  
  export interface ProductDisplayProps {
    products: Products[];
  }

  export type ProductsDetails = {
    category: string;
    id: number;
    images: string[];
    imagess: string[];
    img: string;
    price: number;
    productDetails: string;
    productName: string;
    rate: string;
    available: string;
    space?: string[]; // Make optional
    title?: string;   // Make optional
    description?: string; // Make optional
}