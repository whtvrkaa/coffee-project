import React from 'react'
import {Link} from "gatsby"


export default function Title({title}) {
    return (
        <div className="row">
        <div className="col text-center mb-3">
           <h1 className="dispaly-4 text-capitalize font-weight-bold">{title}</h1> 
</div>
        </div>
    );
}
