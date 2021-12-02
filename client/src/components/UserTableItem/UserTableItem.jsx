//modules
import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Image, Container, Row, Col, Tooltip, OverlayTrigger, ListGroupItem } from "react-bootstrap";

const UserTableItem = ({ people, setContactToEdit, searchInput }) => {
	const history = useHistory();
	// Tooltip
	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Select contact to show details
		</Tooltip>
	);
	// Search filter
	const filteredUsers = (userInput) => {
		if (!people) return;
		const lowerCaseUserinput = userInput.toLowerCase();
		let filteredResults = people.filter((person) => {
			return person.name.first.toLowerCase().includes(lowerCaseUserinput) || person.name.last.toLowerCase().includes(lowerCaseUserinput);
		});
		return filteredResults;
	};
	const filteredPeople = filteredUsers(searchInput);
	return (
		<Fragment>
			{people ? (
				filteredPeople.map((user, i) => {
					return (
						<ListGroupItem key={`${user.login.uuid} ${i}`}>
							<Container className="my-3 my-auto flex justify-content-center">
								<Row
									onClick={(e) => {
										setContactToEdit(user);
										history.push("/details");
									}}>
									<Col md={6} className="mx-auto text-center">
										<div className="ms-2 me-auto">
											<div className="fw-bold">
												<OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
													<Link
														to="/details"
														style={{
															color: "inherit",
															textDecoration: "inherit",
															paddingRight: "20px"
														}}>
														{" "}
														<div className="my-auto">
															{user.name.first} {user.name.last}{" "}
														</div>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</Col>
									<Col md={6} className="my-auto mx-auto text-center py-2 px-1">
										{/*User photos are here */}
										<Image height="48px" width="48px" src={user.picture.thumbnail || "../../../../assets/noimage.jpg"} alt="user_picture" roundedCircle />
									</Col>
								</Row>
							</Container>
						</ListGroupItem>
					);
				})
			) : (
				<div>Searching for users...</div>
			)}
		</Fragment>
	);
};

export default UserTableItem;
