import { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";

const Banner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://brabd-assignment-10-server.vercel.app/Category")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="">
      <div className="">
        <img
          className="max-h-[80vh] w-full rounded-b-xl"
          src="https://i.ibb.co/cDt9yWM/new-smartphone-balancing-with-cloth.jpg"
          alt=""
        />
      </div>
      <div className="">
        <h2 className="text-center mt-10 text-3xl font-bold text-black">
          Our Brand Products
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
