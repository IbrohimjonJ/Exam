import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import HeadPhone from "../../public/assets/shared/desktop/Bitmap.png";
import speakers from "../../public/assets/home/desktop/image-speaker.png";
import speaker from "../../public/assets/home/desktop/image-speaker-zx7.jpg";
import earphones from "../../public/assets/home/desktop/image-earphones-yx1.jpg";
import Linkimages from "../components/Linkimages";
import HeroFooter from "../components/HeroFooter";


const url = "/products";


export const loader = async () => {
  const req = await customFetch(url);

  const products = req.data.data;
  console.log(products);

  return { products };
};
function Home() {


  const { products } = useLoaderData();
  return <>
    <header className="">
      <div className="h-[632px] w-[1110px] flex justify-between mx-auto items-center">
        <div>
          <h2 className="mb-6 text-gray-400">NEW PRODUCT</h2>
          <h1 className="h1 text-slate-100">XX99 Mark II Headphones</h1>
          <p className="PPP my-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button to={"/headphones"} className="text-white hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none ">
            SEE PRODUCT
          </button>
        </div>
        <img className="ml-28 text-white" src={HeadPhone} alt="HeadPhone" />
      </div>
    </header>
    <div className="div">
      <Linkimages />
    </div>
    <section className="mt-10 mb-10">
      <div className="container">

        <ul className="flex flex-col gap-16">
          <li className="  my_img bg-orange-400 flex justify-between flex-wrap gap-11 p-16 items-center ">
            <img src={speakers} width={400} height={490} alt="speaker" className="home_img" />
            <div className="flex flex-col gap-11 items-start">
              <h2 className="h2   uppercase text-white">zx9 <br />
                <span>speaker</span></h2>
              <p className=" p text-gray-600">Upgrade to premium speakers that are <br /> phenomenally built to deliver truly remarkable <br /> sound.</p>
              <Link to={"/speakers"}   className=" btn p text-white hover:bg-[#4C4C4C] w-40 h-12 bg-black border-none ">See Products</Link>
            </div>
          </li>
          <li className="relative">
            <div className="absolute top-36 left-16 flex flex-col gap-5">
              <h2 className="text-4xl">ZX7 SPEAKER</h2>
              <a href="/speakers" className="btn text-black  hover:text-white hover:bg-black w-40 h-12 bg-nane border-2 border-black">See Products</a>
            </div>
            <img width={1900} height={600} src={speaker} alt="" />
          </li>
          <li className="flex items-center justify-center flex-wrap gap-10">
            <img width={640} height={320} src={earphones} alt="speaker" className="img_" />
            <div className=" flex items-center p-10 gap-5 justify-center text-center flex-col" style={{ width: "620px", height: "380px", background: "#F1F1F1" }}>
              <h2 className="text-3xl">YX1 EARPHONES</h2>
              <Link to={"/earphones"} className="btn text-black  hover:text-white hover:bg-black w-40 h-12 bg-nane border-2 border-black  cursor-pointer">See Products</Link>
            </div>

          </li>
        </ul>
      </div>
      <HeroFooter />
    </section>

  </>
}
export default Home;
