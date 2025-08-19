import React from "react";
import Navbar from "../Navbar/Navbar";
import OrderForm from './OrderForm.jsx';
import './Order.css';
import Footer from "../Footer/Footer.jsx";

const Order = () =>{

return(
    <>

    <div className="Order-Page-Container">
         <Navbar/>
         <h1 className="text-top-Order-page">
         <span className="text-Top-HeroComp">order light invoice</span> and
         experience easier invoicing
         </h1>
         <div className="form-Container">
           <OrderForm/>
         </div>
         <div>
         <Footer/>
         </div>
    </div>
    
    </>
)

}

export default Order;