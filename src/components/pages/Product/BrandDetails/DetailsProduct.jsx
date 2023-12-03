import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailsProduct = () => {
  const data = useLoaderData();
  const [product, setProduct] = useState(data);
  const { image, name, description, _id } = product;
  const email = "suktuhin@gmail.com";
  // console.log(data);

  const addToCard = (id) => {
    console.log(id);
    fetch("http://localhost:5000/addCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ product, email }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 max-w-screen-xl mx-auto my-20">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div
            className="w-full lg:w-1/2"
            // style={`ba; background-position: center center; background-size: cover;`}
          >
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 mb-8 dark:text-violet-400"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="text-3xl font-semibold leadi">{name}</h2>
            <p className="mt-4 mb-8 text-sm">{description}</p>
            <Link onClick={() => addToCard(_id)}>
              <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-violet-400 dark:text-gray-900">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsProduct;
