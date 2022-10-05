import React from 'react'
import "../components/Features.css"
import medicine from "../images/medicine.png"
import orphanage from "../images/orphanage.png"
import truck from "../images/delivery-truck.png"
import earth from "../images/world-humanitarian-day.png"
function Features() {
  return (
    <div>
         <section id="features">
          <h1 className='heading-small'>What We do</h1>
          <h1 className='heading-main'><strong>We do it</strong> for all people</h1>
  <div class="row">

    <div class="feature-box col-lg-5">
      <h3>Medicine and Treatment<img src={medicine} class="photo1"/></h3>
      <p>we will provide medication around the world</p>
    </div>

    <div class="feature-box col-lg-5 ">
      <h3>We Build and Create<img src={orphanage} class="photo3"/></h3>
      <p>We will build NGO's association and orphanage around the world</p>
    </div>
    <div class="feature-box col-lg-5 ">
      <h3>Water Delivery<img src={truck} class="photo2"/></h3>
      <p>We are helping people in water scarce villages to build sustainable water harvesting systems.</p>
    </div>
    <div class="feature-box col-lg-5 ">
      <h3>We Care About Earth<img src={earth} class="photo1"/></h3>
      <p>Strives to help make the changes necessary to provide a healthier future for our planet by funding our Global Initiatives.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Features