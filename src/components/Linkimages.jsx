import React from 'react'
import headphones from "../../public/assets/shared/desktop/category.png";
import audiophile from "../../public/assets/shared/desktop/image.png";
import earphones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from 'react-router-dom';

const Linkimages = () => {
  return (
    <div>
      <div className="links_img_wrapper">
      <ul className=" my  flex items-center flex-wrap">
        <li className="link_img_item">
          <img
            className="link_img_item_img"
            width={270}
            height={121}
             src={headphones} 
            alt="headphone img"
          />
          <h3 className="font-bold">HEADPHONES</h3>
          <Link className="btn3" to={"/headphones"}>
            SHOP {`>`}
          </Link>
        </li>
        <li className="link_img_item">
          <img
            className="link_img_item_img"
           src={audiophile}
            width={270}
            height={121}
            alt="speaker img"
          />
          <h3 className="font-bold">SPEAKERS</h3>
          <Link className="btn3" to={"/speakers"}>
            SHOP {`>`}
          </Link>
        </li>
        <li className="link_img_item">
          <img
            className="link_img_item_img"
            width={270}
            height={121}
           src={earphones}
            alt="earphone img"
          />
          <h3 className="font-bold">EARPHONES</h3>
          <Link className="btn3" to={"/earphones"}>
            SHOP {`>`}
          </Link>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Linkimages
