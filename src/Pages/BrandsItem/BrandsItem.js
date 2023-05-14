import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { useGetAllProductsQuery } from "../../features/api/productsApi";
import { coverImage } from "../../data";

const BrandsItem = () => {
  const location = useLocation();
  const brands = location?.state;
  console.log(brands);

  // fetching products data with district and brand
  const { data } = useGetAllProductsQuery();
  const products = data?.data;
  // console.log("brand img", brands);
  // console.log("cover img", coverImage);
  const selectImage = coverImage.filter(
    (select) => select.name === brands.brandName
  );
  console.log(selectImage);
  const findImage = selectImage.find((image) => image);
  console.log(findImage);

  const selectedProducts = products?.filter((brandItem) => {
    return (
      brandItem?.brandName === brands?.brandName &&
      brandItem?.district === brands?.district
    );
  });
  const mapingProducts = selectedProducts?.map(
    (products) => products?.products
  );
  const allProducts = mapingProducts?.[0].map((products) => products);

  const dispatch = useDispatch();
  return (
    <div className="p-4 lg:p-12">
      <div class="bg-cover bg-center ...">
        <figure>
          <img src={findImage.image} alt="Shoes" />
        </figure>
      </div>
      {/* <BrandCover></BrandCover> */}
      {/* search bar */}
      <div className="relative hidden lg:block text-gray-600 w-2/4 mx-auto mt-6 shadow-xl rounded shadow-gray-300">
        <input
          className="bg-white h-8 px-5 pr-10 rounded-full text-sm focus:outline-none w-[500px]"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4 ">
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.656 10.562c-1.031.813-2.344 1.313-3.75 1.313-3.313 0-6-2.688-6-6s2.687-6 6-6 6 2.688 6 6c0 1.406-.5 2.719-1.313 3.75l3.563 3.563-1.406 1.407-3.563-3.563zM6 8c0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3-3 1.344-3 3z" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center pb-8  mt-6 ">
        <div className="card card-compact rounded-none bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[250px] h-[200px]"
              src={brands?.brandImage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Brand: {brands?.brandName}</h2>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center text-xl font-bold mb-6">
          {brands?.brandName} Chocolate items {allProducts?.length}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {allProducts?.map((product) => {
            return (
              <div className="card card-compact rounded-none bg-base-100 shadow-xl">
                <figure>
                  <img className="h-[200px]" src={product?.image} alt="" />
                </figure>
                <div className="card-body text-center items-center">
                  <h2 className="card-title">{product?.name}</h2>
                  <h2 className="card-title">{product?.price}$</h2>
                  <h2 className="card-title">Quantity: {product?.quantity}</h2>
                </div>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="px-2 py-1 bg-[#9A583B] text-white"
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandsItem;
