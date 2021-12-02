//modules
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
	return (
		<Navbar className="sticky-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<i className="fas fa-address-book " />
				</Navbar.Brand>
				<Link to="/" style={{ textDecoration: "none", paddingRight: "50px" }}>
					Address Book
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Item as={Link} to="/addcontact" style={{ textDecoration: "none" }}>
								Add New Contact<i className="fas fa-plus ml-2"></i>
						</Nav.Item>
						<Nav.Item>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
