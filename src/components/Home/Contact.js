import React from 'react'
import Title from '../Globals/Title'

function Contact() {
    return (
     <section className="contact py-5">
         <Title title="contact us"/>
         <div className="row">
             <div className="col-10 col-sm-8 col-md-6 mx-auto">
                 <form action="https://formspree.io/f/xwkwgqgg" method="POST">
                     <div className="form-group py-2" >
                         <label htmlFor="name">Name</label>
                         <input type="text" className="form-control"
                             name="name" id="name" placeholder="your name.." />
                     </div>
                     <div className="form-group py-2">
                         <label htmlFor="email">Email</label>
                         <input type="text" className="form-control"
                             name="email" id="email" placeholder="your email.." />
                     </div>
                     <div className="form-group py-2">
                         <label htmlFor="decription">Description</label>
                         <textarea className="form-control" name="description" id="description" rows="5" placeholder="your description here..."/>
                     </div>
                     <button type="submit" className="btn col-12 btn-block btn-yellow text-capitalize mt-5">submit</button>
                 </form>
             </div>
         </div>
     </section>
    )
}

export default Contact
