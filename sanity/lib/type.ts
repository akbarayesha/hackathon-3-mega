export interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    isNew: boolean;
    productImage: {
      asset: {
        url: string;  // The URL of the image
      };
    };
    tags?: string[];
  }