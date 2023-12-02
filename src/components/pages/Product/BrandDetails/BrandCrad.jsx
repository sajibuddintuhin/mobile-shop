import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandCrad = ({ brands }) => {
  // eslint-disable-next-line react/prop-types
  const { image, brand, name, price, category, _id } = brands;
  return (
    <div>
      {" "}
      <div className="card card-compact mx-10 md:mx-0 md:w-96  shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl text-black font-semibold text-center">
            {name}
          </h2>
        </div>
        <div className="text-black text-xl text-center pb-4">
          <h3 className="font-semibold">Type of category: {category}</h3>
          <h3 className="font-medium">Band Name: {brand}</h3>
          <p className="font-normal">Price: {price}</p>
        </div>
        <div className="flex justify-between px-3 py-2">
          <Link to={`/details/${_id}`}>
            <button className="btn bg-[#154175] text-white">
              Details button
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-success">Update button</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCrad;
