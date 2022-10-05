import React from 'react'
import bg1 from "../images/bg-1.jpg"
import Button from 'react-bootstrap/Button';
import "./Hero.css"
function Hero() {
  return (
    <div>
        <section className='Main'>
<h1>YOUR HOME <br/>FOR HELP</h1>
{/* <a href='https://docs.google.com/forms/d/e/1FAIpQLScz6V2lQscaoJrqHMI5JS8v5KJLOz7TupMkQXIWDH6UvHnSWw/viewform?usp=sf_link'><button type="button" class="btn btn-outline-primary" >  Start a Fund</button></a> */}
{/* <Button variant="outline-primary">Primary</Button>{' '} */}
<Button variant="primary" size="lg" active>
        Primary button
      </Button>{' '}

        </section>
    </div>
  )
}

export default Hero