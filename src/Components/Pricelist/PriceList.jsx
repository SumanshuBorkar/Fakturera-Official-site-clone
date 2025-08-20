import React from "react";
import Header from "./Header/Header";
import "./PriceList.css";
import Menu from "./Menu/Menu";
import Table from "./Table/Table";



const PriceList = () => {
    return (
        <>
            <div className="price-List-Dashboard-Container">
                <Header />
                <div className="Hero-Container-Pricelist">
                    <div className="Menu-Container">
                        <Menu />
                    </div>
                    <div className="table-section">
                        <Table />
                    </div>
                </div>

            </div>
        </>
    )
}


export default PriceList;