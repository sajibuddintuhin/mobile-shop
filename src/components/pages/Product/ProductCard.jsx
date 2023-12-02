import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { image, brand } = product;
  return (
    <div>
      <Link to={`/product/${brand}`}>
        <div className="card card-compact mx-10 md:mx-0 md:w-96  shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl text-black font-semibold text-center">
              {brand}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
