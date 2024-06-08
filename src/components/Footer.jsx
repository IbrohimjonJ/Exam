import React from 'react'
import { Link } from 'react-router-dom'
import faceebook from "../../public/assets/shared/desktop/icon-facebook.svg";
import instagram from "../../public/assets/shared/desktop/icon-instagram.svg";
import twitter from "../../public/assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container gap-5">
        <div className="flex items-center justify-between p-5 gap-5">
          <Link href="/" className="text-white font-bold text-3xl">
            audiophile
          </Link>
          <nav>
            <ul className="flex flex-wrap gap-11">
              <li className="nav_link">
                <Link className='hover:text-[#d87D4A]' to={"/"}>HOME</Link>
              </li>
              <li className="nav_link">
                <Link className='hover:text-[#d87D4A]'to={"/headphones"}>HEADPHONES</Link>
              </li>
              <li className="nav_link">
                <Link className='hover:text-[#d87D4A]'to={"/speakers"}>SPEAKERS</Link>
              </li>
              <li className="nav_link">
                <Link className='hover:text-[#d87D4A]' to={"/earphones"}>EARPHONES</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-gray-600 flex items-center p-5 gap-5 flex-wrap justify-between">
          <div className="flex flex-col">
            <p className="mb-5 w-full  text-[#878787]">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br />
              of music lovers and sound specialists who are devoted to helping you get the <br />
               most out of personal audio. Come and visit our demo facility - we’re open 7 <br />
               days a week.
            </p>
            <p className="mt-5 w-full ">Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="flex gap-4 h-7 cursor-pointer">
            <a href="#">
             <img src={faceebook} alt="icon" />
            </a>
            <a href="#">
            <img src={twitter} alt="icon" />
            </a>
            <a href="#">
            <img src={instagram} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer