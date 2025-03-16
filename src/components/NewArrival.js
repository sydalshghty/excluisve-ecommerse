import ColProps from "./ColProps";
import "../css/NewArrival.css";
import PlastaionImg from "../images/Frame 684.png";
import WomenImg from "../images/Frame 685 (2).png";
import SpeakerImg from "../images/Frame 686.png";
import PerfumImg from "../images/Frame 687.png";

function NewArrival() {
    return (
        <div className="NewArrival-Departament">
            <div className="container">
                <div className="col-props">
                    <ColProps title="Featured"/>
                </div>
                <div className="heading">
                    <h3>New Arrival</h3>
                </div>
                <div className="New-Arrival-Content">
                    <div className="PlayStation-Col">
                        <img src={PlastaionImg} alt="PlayStation-img" />
                        <div className="content-PlayStation">
                            <h3>PlayStation 5</h3>
                            <p>Black and White version of the PS5 coming out on sale.</p>
                            <a href="#Shop-Now">Shop Now</a>
                        </div>
                    </div>
                    <div className="W-S-P-Cols">
                        <div className="Women’s-Col">
                            <img src={WomenImg} alt="img-Women" />
                            <div className="content">
                                <h3>Women’s Collections</h3>
                                <p>Featured woman collections that give you another vibe.</p>
                                <a href="#Shop-Now">Shop Now</a>
                            </div>
                        </div>
                        <div className="S-P-Cols">
                            <div className="Speakers-Col">
                                <img src={SpeakerImg} alt="img-Speakers" />
                                <div className="content">
                                    <h3>Speakers</h3>
                                    <p>Amazon wireless speakers</p>
                                    <a href="#Shop-Now">Shop Now</a>
                                </div>
                            </div>
                            <div className="Perfume-Col">
                                <img src={PerfumImg} alt="img-Perfume" />
                                <div className="content">
                                    <h3>Perfume</h3>
                                    <p>GUCCI INTENSE OUD EDP</p>
                                    <a href="#Shop-Now">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewArrival;
