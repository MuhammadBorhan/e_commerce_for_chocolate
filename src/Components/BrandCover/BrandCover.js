import React from "react";
import godiva from "../../assets/images/brandImage/godiva.webp";
import { coverImage } from "../../data";
import { useGetAllProductsQuery } from "../../features/api/productsApi";

const BrandCover = () => {
  const { data } = useGetAllProductsQuery();
  const brandImg = coverImage;
  console.log(brandImg);
  return (
    <div className="p-4 lg:p-12">
      <div className="bg-cover bg-center ...">
        <figure>
          <img src={godiva} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default BrandCover;
