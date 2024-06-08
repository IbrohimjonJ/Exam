import React from 'react'
import { customFetch } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';
import Linkimages from '../components/Linkimages';
import HeroFooter from '../components/HeroFooter';
const url = "/products";
export const loader = async () => {
  const req = await customFetch(url);
  const products = req.data.data;
  return { products };
}
function Headphones() {
  const { products } = useLoaderData()
  return (
    <>

      <div >

        <div>
          <div className="p-20 font-bold uppercase background-links">

            <h2 className="text-center text-white text-3xl">Headphones</h2>
          </div>
          <ul className="container flex flex-col mt-10 mb-10 gap-10">

            {products.map((product) => {

              if (product.category === "headphones") {
                return (
                  <div key={product.id}>
                    <li className="flex items-center gap-24 justify-center flex-wrap w-full">
                      {product.id == 3 ? '' : <img src={product.categoryImage.desktop} alt={product.name} width={540} height={560} />}
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
                      {product.id == 3 ? <img src={product.categoryImage.desktop} alt={product.name} width={540} height={560} /> : ''}

                    </li>
                  </div>
                )
              }
            }
            )}
          </ul>
        </div>
      </div>
      <div className='mt-48'>
          <Linkimages/>
          <HeroFooter/>
          </div>
    </>
  )
}

export default Headphones