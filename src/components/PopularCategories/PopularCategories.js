import React from 'react'

import guns from "./gun.png"
import knifes from "./knifes.jpg"
import opticalSight from "./opticalSight.jpg"
import binoculars from "./binoculars.jpg"
import fishing from "./fishing.jpg"
import pistols from "./pistols.png"

import Category from "./Category";

export default function PopularCategories() {
    return(
        <div className="container pb-5">
            <h3>Popular categories</h3>
            <div className="row pb-3" style={{backgroundColor:"#eee"}}>
                <Category w="col-6" img={guns} label={"Guns"} category={"14"}/>
                <Category w="col-3" img={knifes}  label={"Knifes"} category={"14"} subcategory={"guns 1"} r/>
                <Category w="col-3" img={pistols} label={"Pistols"} r/>
            </div>
            <div className="row ">
                <Category w="col-3" img={binoculars} label={"Binoculars"}/>
                <Category w="col-3" img={fishing} label={"Fishing"} r/>
                <Category w="col-6" img={opticalSight} label={"Optical sight"} r/>
            </div>
        </div>
    )
}
