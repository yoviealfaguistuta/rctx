import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './App.css';
import { Col, Row } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

function App() {
	return (
		<div>

			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100 h-50"
						src="https://img.freepik.com/free-vector/shiny-white-gray-background-with-wavy-lines_1017-25101.jpg?w=2000"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 h-50"
						src="https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 h-50"
						src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<Row className='margin-card'>
				<Col lg="3">
					<Card >
						<Card.Img variant="top" src="https://media.istockphoto.com/id/1338579925/vector/geometric-background-of-squares-and-dots.jpg?s=612x612&w=0&k=20&c=SZJsLHWoh2rTHRJP5bSss3a7xuY6GCE3iFLUDW2t0Q0=" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Dropdown>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									Aksi
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Detail</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Perbarui</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Hapus</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Body>
					</Card>
				</Col>
				<Col lg="3">
					<Card >
						<Card.Img variant="top" src="https://media.istockphoto.com/id/1338579925/vector/geometric-background-of-squares-and-dots.jpg?s=612x612&w=0&k=20&c=SZJsLHWoh2rTHRJP5bSss3a7xuY6GCE3iFLUDW2t0Q0=" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Dropdown>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									Aksi
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Detail</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Perbarui</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Hapus</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Body>
					</Card>
				</Col>
				<Col lg="3">
					<Card >
						<Card.Img variant="top" src="https://media.istockphoto.com/id/1338579925/vector/geometric-background-of-squares-and-dots.jpg?s=612x612&w=0&k=20&c=SZJsLHWoh2rTHRJP5bSss3a7xuY6GCE3iFLUDW2t0Q0=" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Dropdown>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									Aksi
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Detail</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Perbarui</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Hapus</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Body>
					</Card>
				</Col>
				<Col lg="3">
					<Card >
						<Card.Img variant="top" src="https://media.istockphoto.com/id/1338579925/vector/geometric-background-of-squares-and-dots.jpg?s=612x612&w=0&k=20&c=SZJsLHWoh2rTHRJP5bSss3a7xuY6GCE3iFLUDW2t0Q0=" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Dropdown>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									Aksi
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Detail</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Perbarui</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Hapus</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default App;
