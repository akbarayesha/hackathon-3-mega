"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/sanity/lib/fetchproduct"; // Adjust this path as per your file structure
import { Product } from "@/sanity/lib/type"; // Assuming the type is defined in types/index.ts
import ProductCard from "./ProductCard"; // Assuming ProductCard is in the components folder


// import Button from "@/components/Button"; // Assuming Button is in the components folder

const Products = () => {
  const [productArray, setProductArray] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);  // For loading state

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProductArray(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false); // Set loading to false after data is fetched
      }
    };

    getProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;  // Show a loading indicator while data is being fetched
  }

  return (
    <div className="px-[30px] md:px-[60px] pb-[48px]">
      <h2 className="text-[40px] font-bold font-poppins text-center mb-8">
        Our Products
      </h2>

      {/* Container for product cards */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
        {productArray.map((product, index) => (
          <ProductCard
            key={index}
            url={product.productImage?.asset.url || "/assets/placeholder.png"} // Placeholder image URL if no image is found
            label={product.isNew ? "New!" : ""} // Show 'New!' if product.isNew is true
            title={product.title || "Untitled"} // Fallback to "Untitled" if no title
            discount={product.discountPercentage || 0} // Default to 0 if no discount
            actual={product.price || 0}  // Default to 0 if price is missing
            forceHover={false}  // Adjust based on your needs
          />
        ))}
      </div>

      {/* <Button /> */}
    </div>
  );
};

export default Products;