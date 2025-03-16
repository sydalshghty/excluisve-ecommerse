import "../css/cart.css";
import iconCancel from "../images/icon-cancel.svg";
import dropUp from "../images/Drop-Up-Small.svg";
import dropDown from "../images/Drop-Down-Small.svg";
import productImg from "../images/g27cq4-500x500 1.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Cart(){
    const navigate = useNavigate("");

    const handleNavigate = () => {
        navigate("/Checkout")
    }
    return(
        <div className="Cart-Departament">
            <div className="container">
                <div className="heading-cart">
                    <p>Home</p>
                    <span>/</span>
                    <p>Cart</p>
                </div>
                <div className="heading-Product">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className="Col-Products">
                    <div className="product-content">
                        <div className="P-Content">
                            <div className="col-image">
                                <img className="icon-cancel" src={iconCancel} alt="delete-icon"/>
                                <img className="img-product" src={productImg} alt="img-product"/>
                            </div>
                            <p className="title-product">LCD Monitor</p>
                        </div>
                        <div className="col-price">
                            <p>$650</p>
                        </div>
                        <div className="quantity">
                        <div className="col-quantity">
                            <p>01</p>
                            <div className="buttons">
                                <img src={dropUp} alt="drop-up"/>
                                <img src={dropDown} alt="drop-down"/>
                            </div>
                        </div>
                        </div>
                        <div className="col-Subtatol">
                            <p>$650</p>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="P-Content">
                            <div className="col-image">
                                <img className="icon-cancel" src={iconCancel} alt="delete-icon"/>
                                <img className="img-product" src={productImg} alt="img-product"/>
                            </div>
                            <p className="title-product">LCD Monitor</p>
                        </div>
                        <div className="col-price">
                            <p>$650</p>
                        </div>
                        <div className="quantity">
                        <div className="col-quantity">
                            <p>01</p>
                            <div className="buttons">
                                <img src={dropUp} alt="drop-up"/>
                                <img src={dropDown} alt="drop-down"/>
                            </div>
                        </div>
                        </div>
                        <div className="col-Subtatol">
                            <p>$650</p>
                        </div>
                    </div>
                </div>
                <div className="col-button-shop">
                    <button>Return To Shop</button>
                    <button>Update Cart</button>
                </div>
                <div className="col-Coupon-Code">
                    <div className="col-buttons">
                        <button>Coupon Code</button>
                        <button>Apply Coupon</button>
                    </div>
                    <div className="col-Cart-Total">
                        <h3>Cart Total</h3>
                        <div className="Subtotal-Col">
                            <p>Subtotal:</p>
                            <p>$1750</p>
                        </div>
                        <div className="Shipping-Col">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className="Total-Col">
                            <p>Total:</p>
                            <p>$1750</p>
                        </div>
                        <div className="checkout-button">
                            <button onClick={handleNavigate}>Procees to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Cart;