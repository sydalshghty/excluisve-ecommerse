import ColProps from "./ColProps";
import "../css/OurProducts.css";
import arrowLeft from "../images/Fill With Left Arrow.png";
import arrowRight from "../images/Fill with Right Arrow.png";
import "@fortawesome/react-fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faEye } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import ViewAllProducts from "./ViewAllProducts";
import { useDispatch } from "react-redux";
import { IncreamentHeart } from "../store/reducer";
function OurProducts() {

    const dispatch = useDispatch();
    
    const [sliderRef, setSliderRef] = useState(null);

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

    const [Products, setProducts] = useState([]);

    const getAllProducts = async () => {
        await fetch("ourProducts.json")
            .then((response) => response.json())
            .then(data => setProducts(data.OurProducts))
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    const goToPrev = () => {
        if (sliderRef) {
            sliderRef.slickPrev();
        }
    }

    const goToNext = () => {
        if (sliderRef) {
            sliderRef.slickNext();
        }
    }
 
    return (
        <div className="ourProducts-Departament">
            <div className="container">
                <ColProps title="Our Products" />
                <div className="heading-Products">
                    <h3>Explore Our Products</h3>
                    <div className="left-right-col">
                        <img onClick={goToPrev} src={arrowLeft} alt="img-Left" />
                        <img onClick={goToNext} src={arrowRight} alt="img-Right"/>
                    </div>
                </div>
                <div className="All-Products">
                    <Slider {...settings} ref={setSliderRef}>
                        {Products.map((product, index) => {
                        return (
                            <div className="col-product" key={product.id}>
                                <div className="col-image">
                                    <div className="image-content">
                                        <img src={product.img} alt="img-product" />
                                    </div>
                                    <div className="heart-Eye-col">
                                        <div>
                                            <FontAwesomeIcon onClick={() => {
                                                dispatch(IncreamentHeart(1))
                                            }} className="icon" icon={faHeart} />
                                        </div>
                                        <div>
                                            <FontAwesomeIcon className="icon" icon={faEye}/>
                                        </div>
                                    </div>
                                    <p className="Add-To-Cart">Add To Cart</p>
                                </div>
                                <div className="content-product">
                                    <p className="title-product">{product.title}</p>
                                    <div className="Price-Stars-Col">
                                        <p className="price-product">${product.newPrice}</p>
                                        <div className="col-stars">
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                        </div>
                                        <p className="number-Star">({product.numberStar})</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Slider>
                </div>
                <div className="col-button">
                    <ViewAllProducts/>
                </div>
            </div>
        </div>
    )
}
export default OurProducts;