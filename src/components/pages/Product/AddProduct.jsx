import Swal from "sweetalert2";

const AddProduct = () => {
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

    fetch("https://brabd-assignment-10-server.vercel.app/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your New Product Add successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
      });
  };
  return (
    <div className="max-w-screen-2xl text-black mx-auto bg-[#F4F3F0]">
      <div className=" text-center pt-8">
        <h2 className="text-3xl font-extrabold ">Add New Product</h2>
        <p>
          Provide a brief description of the product, its main features and
          functionality. <br /> Mention the unique selling points that
          differentiate this product from others in the market
        </p>
      </div>
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
                required
              />
            </div>
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered bg-slate-50"
                required
              />
            </div>
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Brand Name"
                className="input input-bordered bg-slate-50"
                required
              />
            </div>
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">category Name</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="category name"
                className="input input-bordered bg-slate-50"
                required
              />
            </div>

            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="price"
                name="price"
                placeholder="price"
                className="input input-bordered bg-slate-50"
                required
              />
            </div>
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Short description"
                className="input input-bordered bg-slate-50"
                required
              />
            </div>
            <button className="btn col-span-2 max-w-lg mx-auto mt-5">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
