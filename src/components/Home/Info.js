import React from 'react'
import {Link} from 'gatsby'
import Title from './../Globals/Title'

export default function Info() {
    return (
     <section className="py-5">
<div className="container">
<Title title="our story"/>
    <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque expedita a, 
            aspernatur minus iste quidem dolorem natus 
            animi maiores tempora sed temporibus provident 
            reiciendis harum corporis quibusdam doloremque 
            delectus quaerat praesentium consectetur numquam.
            rem autem consequuntur perspiciatis aut velit.
            </p>
            <Link to="/about">
                <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
        </div>
    </div>
</div>
     </section>
    )
}


