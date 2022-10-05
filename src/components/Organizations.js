import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../components/Organizations.css"
import img1 from "../images/img1.jpg"
import img2 from "../images/img222.jpeg"
import img3 from "../images/img33.jpeg"
import img4 from "../images/img44.jpeg"
import img5 from "../images/img55.jpeg"
import img6 from "../images/img66.jpeg"
import { Link } from 'react-router-dom';
import logo from "../images/believe.png"
function Organizations() {
  return (
    <div>
        <ul className="nav justify-content-center">
        
        <li className="nav-brand">
        <Link to="/" className="nav-link active">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} className="logo"/></a>
          </Link>
        </li>
        <li className="nav-item">
       <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/works" className="nav-link ">How it works</Link>
        </li>
        <li className="nav-item">
        <Link to="/organizations" className="nav-link">Organizations</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fund raise for 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Medical Treatment</a></li>
            <li><a class="dropdown-item" href="#">Society Welfare</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Animal Welfare</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link to="/gallery" className="nav-link">Gallery</Link>
        </li>
        <li className="nav-item">
        <Link to="/signUp" className="nav-link">Sign Up</Link>
        </li>
      </ul>
        <h1>Organizations</h1>
        <Card className="card1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Animal Welfare</Card.Title>
        <Card.Text>
        Donate for animal fund 
minimum donation is <strong>0.0002ETH</strong>
        </Card.Text>
        <Link to="/transaction" ><Button variant="primary">DONATE</Button></Link>
      </Card.Body>
    </Card>
        <Card className="card1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Plantation Drive</Card.Title>
        <Card.Text>
        
Donate for Plantation Drive 
minimum is <strong>0.0002ETH</strong>
        </Card.Text>
        <Link to="/transaction" ><Button variant="primary">DONATE</Button></Link>
      </Card.Body>
    </Card>
        <Card className="card1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Old Age home Donation</Card.Title>
        <Card.Text>
Help senior Citizen by donating Funds 
Minimum Funds is <strong>0.0002ETH</strong>
        </Card.Text>
        <Link to="/transaction" ><Button variant="primary">DONATE</Button></Link>
      </Card.Body>
    </Card>
        <Card className="card1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Donation for Orphans</Card.Title>
        <Card.Text>
        
Renovating the orphanage for children 
minimum donation is <strong>0.0002ETH</strong>
        </Card.Text>
        <Link to="/transaction" ><Button variant="primary">DONATE</Button></Link>
      </Card.Body>
    </Card>
        <Card className="card1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>River cleaning drive </Card.Title>
        <Card.Text>
        
We are doing a river cleaning drive across Ganga 
minimum donation is <strong>0.0002ETH</strong>
        </Card.Text>
        <Link to="/transaction" ><Button variant="primary">DONATE</Button></Link>
      </Card.Body>
    </Card>
        <Card className="card1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Title>Beach cleaning drive </Card.Title>
        <Card.Text>
        
we are doing doing a Beach cleaning drive at Juhu
minimum donation is <strong>0.0002ETH</strong>
        </Card.Text>
        <Link to="/transaction" ><Button variant="primary">DONATE</Button></Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Organizations