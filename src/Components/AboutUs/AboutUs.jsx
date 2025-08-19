import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import AboutUsImg1 from "../../assets/About-us-img1.jpg"
import AboutUsImg2 from "../../assets/About-us-img2.jpeg"
import AboutUsImg3 from "../../assets/About-us-img3.jpeg"
import AboutUsImg4 from "../../assets/About-us-img4.jpeg"
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <div className="HomePageContianer">
                <Navbar />

                <h1 className="text-top-Order-page Additional-Styles">
                    <span className="text-Top-HeroComp">OUR IDEA is that invoicing should be quick and easy </span>
                    Scroll down to read more
                </h1>


                <div className="MainAboutUsSection">

                    <h1 className="heading-aboutSection">
                        <span className="highlited-Text">WE started in the LITTLE </span>
                        without money but with an idea
                    </h1>

                    <p className="Paragraph">Now we are the market leader when it comes to simple invoice programs, with over 43,000 companies as customers.
                    </p>

                    <div className="About-us-Info">
                        <img src={AboutUsImg1} alt="image not available" />
                        <div className="inner-Text-container-aboutus">
                            <h1 className="heading-aboutSection">
                                <span className="highlited-Text">The Customer</span>
                                in focus
                            </h1>
                            <p className="Paragraph" >Our customers must be satisfied. Therefore, as standard, we offer remote control of the PC, and in that way have always solved all problems.</p>
                        </div>
                    </div>
                    <div className="About-us-Info">
                        <div className="inner-Text-container-aboutus">
                            <h1 className="heading-aboutSection">
                                <span className="highlited-Text">Evening and weekends</span>
                                are many of our customers billing
                            </h1>
                            <p className="Paragraph" >We are therefore often available for support, both in the evenings and on weekends.
                                If you choose our Pro support, support is normally given until 21:00, Monday to Sunday.
                            </p>
                        </div>
                        <img src={AboutUsImg2} alt="image not available" />
                    </div>
                    <div className="About-us-Info">
                        <img src={AboutUsImg3} alt="image not available" />
                        <div className="inner-Text-container-aboutus">
                            <h1 className="heading-aboutSection">
                                <span className="highlited-Text">We</span>
                                are ordinary people like you
                            </h1>
                            <p className="Paragraph" >We first started up as a one-man company in an office of 1.5 m2.</p>
                        </div>
                    </div>
                    <div className="About-us-Info">
                        <div className="inner-Text-container-aboutus">
                            <h1 className="heading-aboutSection">
                                <span className="highlited-Text">Soon </span>
                                more staff were needed
                            </h1>
                            <p className="Paragraph" >The wife then chose to work and soon much of the small house became an office.</p>
                        </div>
                        <img src={AboutUsImg4} alt="image not available" />
                    </div>
                    <div className="Hero-Bottom-Heading">
                        <h2
                            className="section-header-title">
                            <span className="heading-highlite">
                                Now
                            </span>
                            {" do the companies have a combined turnover of many millions"}
                        </h2>
                    </div>

                    <div className="section-description-HomeBottom">
                        <p>We try to take the lesson from the humble start with us.
                            Every customer is therefore equally important, regardless of size.
                            We take pride in delivering a product that makes work easier.
                            We are grateful for every existing and for every new customer.
                            We wish you the welcome to try LättFaktura and be as satisfied as our 43,000 other customers.</p>
                        <br /><br />

                        <div >
                            <button className="submit-btn">
                                Download Now
                            </button>
                        </div>
                    </div>

                </div>
                <div>
                    <Slider />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}


export default AboutUs;