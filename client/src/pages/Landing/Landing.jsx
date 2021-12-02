//modules
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

// COMPONENTS
import UserTable from "../../components/UserTable";

const Landing = ({
  people,
  sortPeople,
  setContactToEdit,
  sortType,
  sortTypeToggle,
}) => {
  const [searchInput, setSearchInput] = useState("");
  // Fetch users
  useEffect(() => {
    if (people) {
      sortPeople(people, sortType);
    } else {
      fetch("https://randomuser.me/api/?results=15")
        .then((response) => response.json())
        .then((res) => {
          //give each contact a unique id
          res.results.forEach((el) => (el.login.uuid = uuidv4()));
          //sort results alphabetically
          sortPeople(res.results, sortType);
        })
        .catch((err) => {
          console.log("Error fetching users: ", err);
        });
    }
  }, [sortType]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          {/* Toglle first and last name sort */}
          <h1 onClick={sortTypeToggle}>Contacts</h1>
        </Col>
        <Col md={12}>
          <div style={{ textAlign: "center" }}>
            <input
              className="searchBar"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              style={{
                width: "40%",
                borderRadius: "30px",
                paddingLeft: "20px",
              }}
              type="text"
              placeholder="Search"
            />
          </div>
        </Col>
      </Row>
      {people.length === 0 ? (
        <h4 style={{ textAlign: "center", padding: "50px" }}>
          Add a new contact to get started!
        </h4>
      ) : null}
      <Row>
        <Col md={12} className="mt-5">
          <UserTable
            people={people}
            setContactToEdit={setContactToEdit}
            searchInput={searchInput}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
