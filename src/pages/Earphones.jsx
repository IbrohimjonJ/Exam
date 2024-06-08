import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Linkimages from '../components/Linkimages'
import { customFetch } from '../utils';
import HeroFooter from '../components/HeroFooter';

const url = "/products";
export const loader = async () => {
  const req = await customFetch(url);
  const products = req.data.data;
  return { products };
}
function Earphones() {
  
  const { products } = useLoaderData()
  return (
    <>
    <div >
      <div>
       <div>
    <div className="p-20 font-bold uppercase background-links">
      <h2 className="text-center text-white text-3xl">EARPHONES</h2>
    </div>
    <ul className="container flex flex-col mt-10 mb-10 gap-10">

      {products.map((product) => {
        if (product.category === "earphones") {
                   return (
            <div key={product.id}>
              <li className=" flex items-center gap-24 justify-center flex-wrap w-full ">
                 <img src={product.categoryImage.desktop} alt={product.name} width={540} height={560} />
                <div className="flex flex-col gap-5 text-center items-center">
                  <p className="letter_space_2">NEW PRODUCT</p>
                  <h2 className="text-4xl">{product.slug}</h2>
                  <p className="w-96">
                    {product.description}
                  </p>
                  <div className="w-full flex gap-5 items-center flex-wrap flex-col">
                    <Link to={`/product/${product.slug}`} >
                    <button className="btn1">See product</button>
                    </Link>
                  </div>
                </div>
                                </li>
            </div>
          )
        }
      }
      )}
    </ul>
  </div>
  <Linkimages/>
  <HeroFooter/>
  </div>
</div>
  </>
  )
}


export default Earphones