import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BrandCrad from "./BrandCrad";

const Brand = () => {
  const brandDetails = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [brands, setBrands] = useState(brandDetails);
  console.log(brandDetails);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto ">
        <Carousel className="" showArrows={true}>
          {brands.map((brand) => (
            <div key={brand._id}>
              <img className="max-h-[700px]" src={brand.image} />
              <p className="legend max-w-xs ">{brand?.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-16">
        {brands.map((brand) => (
          <BrandCrad key={brand._id} brands={brand}></BrandCrad>
        ))}
      </div>
    </div>
  );
};

export default Brand;
