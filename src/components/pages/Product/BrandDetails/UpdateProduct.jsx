import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const updateProduct = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [update, setUpdate] = useState(updateProduct);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;

    const product = { image, name, brand, category, price, description };
    console.log(product);
    fetch(
      `https://brabd-assignment-10-server.vercel.app/update/${update?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-start",
            icon: "success",
            title: "Your product has been successfully updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="max-w-screen-2xl text-black mx-auto bg-[#F4F3F0]">
      <form className="" onSubmit={handleForm}>
        <div className="">
          <div className="grid grid-cols-2 p-40 gap-5">
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="image"
                className="input input-bordered bg-slate-50"
                defaultValue={update?.image}
              />
            </div>
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                defaultValue={update?.name}
                placeholder="name"
                className="input input-bordered bg-slate-50"
              />
            </div>
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                defaultValue={update?.brand}
                placeholder="Brand Name"
                className="input input-bordered bg-slate-50"
              />
            </div>
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">category Name</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={update?.category}
                placeholder="category name"
                className="input input-bordered bg-slate-50"
              />
            </div>

            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="price"
                name="price"
                defaultValue={update?.price}
                placeholder="price"
                className="input input-bordered bg-slate-50"
              />
            </div>
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue={update?.description}
                placeholder="Short description"
                className="input input-bordered bg-slate-50"
              />
            </div>
            <button className="btn col-span-2 max-w-lg mx-auto mt-5">
              Update Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
