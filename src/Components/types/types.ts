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

export type countData = {
    movement: string
    address: string
    state: string
    country: string
    aptitude: string
    province: string
    city: string
}

export type Action = 
| {type:'MOVEMENT'; payload: string}
| {type:'ADDRESS'; payload: string}
| {type:'STATE'; payload: string}
| {type:'COUNTRY'; payload: string}
| {type:'APTITUDE'; payload: string}
| {type:'PROVINCE'; payload: string}
| {type:'CITY'; payload: string}