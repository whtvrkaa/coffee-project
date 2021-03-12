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
            <p className="lead text-muted mb-5 header">
            We offer organic coffee, artisan roasted in small batches.
            </p>
            <p className="lead text-muted mb-3">
Paw's Coffee is dedicated to creating a memorable experience with coffee lovers everywhere.
Our blends and single origin roasts have been perfected to offer the finest quality cup. </p>
<p className="lead text-muted mb-3">
Artisan roasted in small batches, we taste the coffee as we roast it so you can trust you’ll be getting exceptional flavour with each sip. We know that quality starts at the raw source so we choose ethically sourced, organic beans produced on farms that prioritize a sustainable supply chain from farm to cup.
</p>
  <p className="lead text-muted mb-3 header" >
We want to share our passion for high-quality coffee.
</p>
  <p className="lead text-muted mb-3">
Coffee is a labour of love - one full of robust and complex nuances of flavour.
Connecting with our community and collaborating with like-minded business,
we are invested in raising the bar for your cup.
</p>
  <p className="lead text-muted mb-3">
Explore a world of delicious, high quality coffee with us!
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


