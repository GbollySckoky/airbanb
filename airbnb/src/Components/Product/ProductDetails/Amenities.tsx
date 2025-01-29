import { products } from "../../data/ProductDatas"; // Product list
import { ProductsDetails } from "../../types/types";

const Amenities = () => {
  // Fix: Change type from `Products` to `Products[]` (array of products)
  const shuffleArray = (array: ProductsDetails[]) => {
    return [...array] // Clone array to avoid modifying the original
      .map((item) => ({ item, sort: Math.random() })) // Assign a random number
      .sort((a, b) => a.sort - b.sort) // Sort by the random number
      .map(({ item }) => item); // Extract the original item
  };

  const randomData = shuffleArray(products);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4">
        {randomData.slice(0,9).map((product) => (
            <div key={product?.id}>
                <img src={product?.img} 
                    alt={product?.title}
                    loading="lazy"
                    className='rounded-lg h-[400px] w-[400px] object-cover'
                 />
                <div className="flex space-x-3 mt-3 text-Gray200">
                {product?.space && product?.space.map((pace) => (
                    <p key={pace} className='font-normal text-[14px]'>
                        {pace}
                    </p>
                ))}
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
