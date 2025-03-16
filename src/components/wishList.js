import "../css/wishList.css";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllWishList } from "../store/wishListReducer";
import imgDelete from "../images/Vector (10).svg";
import imgCart from "../images/Cart1.png";
import Slider from "react-slick";
import "../css/ColProps.css";
import imgEye from "../images/Group (1).svg";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function WishList(){
    const  settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed: 500,
      responsive: [
      {
        breakpoint: 1320, 
        settings: {
          slidesToShow: 3,
        },
        },
        {
          breakpoint: 1050,
          settings: {
              slidesToShow: 2
            },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
    };

    const state = useSelector(state => state.items.WishList1);
    //const state = useSelector(state => state.items);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllWishList())
    },[]);

    const state2 = useSelector(state => state.items.WishList2);
    console.log(state2)

    return(
        <div className="wishList-Departament">
            <div className="container">
                <div className="heading-wishlist">
                    <h3>Wishlist (4)</h3>
                    <button>Move All To Bag</button>
                </div>
                <div className="WishList-Products1">
                    <Slider {...settings}>
                    {state.map((product,index) => {
                        return(
                            <div className="col-product" key={product.id}>
                                <div className="col-image">
                                    <div className="div-img">
                                        <img className="img-product" src={product.img} alt="img-product"/>
                                    </div>
                                    <div className="col-star">
                                        <p className="num-star">{product.Star}</p>
                                        <div>
                                            <img src={imgDelete} alt="img-delete"/>
                                        </div>
                                    </div>
                                    <div className="col-addTocart" style={{backgroundColor: "black"}}>
                                        <img src={imgCart} alt="img-Cart"/>
                                        <p>Add To Cart</p>
                                    </div>
                                </div>
                                <div className="content-Product">
                                    <h2 className="title-product">{product.title}</h2>
                                    <div className="col-price">
                                        <p className="newPrice">{`$${product.newprice}`}</p>
                                        <p className="deletePrice">{`$${product.oldprice}`}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Slider>
                </div>
                <div className="wishlist-heading-2">
                    <div className="col-Props">
                        <span></span>
                        <p style={{color: "#000000"}}>Just For You</p>
                    </div>
                        <button>See All</button>
                </div>
                <div className="wishlist-Product2">
                    <Slider {...settings}>
                    {state2.map((product,index) => {
                        return(
                            <div className="col-product" key={product.id}>
                                <div className="col-image">
                                    <div className="img-product">
                                        <img src={product.img} alt="img-product"/>
                                    </div>
                                    <div className="col-star">
                                        <div>
                                            <p>{product.Star}</p>
                                        </div>
                                        <div className="col-Eye">
                                            <img src={imgEye} alt="img-Eye"/>
                                        </div>
                                    </div>
                                    <div className="col-add-To-Cart">
                                        <img src={imgCart} alt="img-cart"/>
                                        <p>Add To Cart</p>
                                    </div>
                                </div>
                                <div className="content-product">
                                    <h3>{product.title}</h3>
                                    <div className="col-price">
                                        <p className="new-price">{`$${product.newprice}`}</p>
                                        <p className="old-price">{`$${product.oldprice}`}</p>
                                    </div>
                                    <div className="col-star">
                                        <div className="all-stars">
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                        </div>
                                        <p>(65)</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Slider>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default WishList;