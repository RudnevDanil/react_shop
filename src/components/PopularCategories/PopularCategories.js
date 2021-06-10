import React from 'react'

import sleeping from "./1.jpg"
import cooking from "./2.jpg"
import tents from "./3.jpg"
import equipment from "./4.jpg"
import backpack70 from "./5.jpg"
import backpack100 from "./6.jpg"

import Category from "./Category";

export default function PopularCategories() {
    return(
        <div className="container pb-5">
            <h3>Popular categories</h3>
            <div className="row pb-3" style={{backgroundColor:"#eee"}}>
                <Category w="col-6" img={sleeping} label={"Sleeping bags"} category={"HMzhEwmwiGGZcqpNSXuU"}/>
                <Category w="col-3" img={cooking}  label={"Cooking"} category={"LT7qaKLVAs2htTSmRPsZ"} subcategory={"Stove"} r/>
                <Category w="col-3" img={tents} label={"Tents"} category={"cx5XIcoTBSrVSDc1woU8"} r/>
            </div>
            <div className="row ">
                <Category w="col-3" img={equipment} label={"Equipment"} category={"mXiGK8z3Wo7AdavrLq3L"} />
                <Category w="col-3" img={backpack70} label={"Backpack 70L"} category={"uDw6i9O0HWieuRyp9PM2"} subcategory={"70 Liter"} r/>
                <Category w="col-6" img={backpack100} label={"Backpack 100L"} category={"uDw6i9O0HWieuRyp9PM2"} subcategory={"100 Liter"} r/>
            </div>
        </div>
    )
}
