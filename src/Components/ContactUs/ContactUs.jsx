import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const ContactUs = () => {

    return (

        <>
            <div className="HomePageContianer">
                <Navbar />

                <div className="form-container">

                    <div className="trial-form">
                        <div className="section-description">
                            <p><span className="Highlited">KUl that YOU want to contact us</span></p>
                            <br /><br />
                            <p>Click here to send an email.</p>
                            <br />
                            <br />
                            <button className="submit-btn">info@FakturaProgram.se</button>
                            <br />                            <br />
                            <p>If you prefer to send by regular mail - send to:</p>
                            <br />
                            <p> EasyInvoice
                                Box 2826
                                187 28 Täby.</p>
                            <br />
                            <p>
                                Telephone 08-555 00 500
                                Fax 08-555 00 501
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>

    )

}


export default ContactUs;