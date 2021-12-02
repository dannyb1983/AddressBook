import React, { Fragment, useState, useEffect } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Details = ({
  people,
  contactToEdit,
  deleteContact,
  sortPeople,
  sortType,
  sameFirstLastNameCheck,
}) => {
  const [emptyName, setEmptyName] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (!contactToEdit || !people) {
      history.push("/");
    }
  }, []);
  // Back button
  const goBack = () => {
    history.push("/");
  };
  // Save the user that's being edited
  const saveEdit = (e) => {
    e.preventDefault();
    // Create a new contact to replace the old one, retaining the uuid/ photo from original contact
    const newContact = {};
    newContact.login = { uuid: contactToEdit.login.uuid };
    newContact.name = { first: e.target[0].value, last: e.target[1].value };
    newContact.email = e.target[2].value;
    newContact.phone = e.target[3].value;
    newContact.picture = { thumbnail: contactToEdit.picture.thumbnail };
    // If the there are no changes to made to the contact
    if (
      newContact.name.first === contactToEdit.name.first &&
      newContact.name.last === contactToEdit.name.last &&
      newContact.email === contactToEdit.email &&
      newContact.phone === contactToEdit.phone
    ) {
      history.push("/");
      return;
    }
    // If first or last name was made blank
    if (newContact.name.first.length < 1 || newContact.name.last.length < 1) {
      setEmptyName(true);
      return;
    } // If there is another contact with the same first & last name
    if (sameFirstLastNameCheck(newContact) === true) {
      let sameUserConfirmation = window.confirm(
        "A contact with this name already exists. Are you sure you want to continue?"
      );
      if (!sameUserConfirmation) {
        return;
      } else {
        let deletedContacts = deleteContact(contactToEdit);
        sortPeople([...deletedContacts, newContact], sortType);
        history.push("/");
      }
    } else {
      let deletedContacts = deleteContact(contactToEdit);
      sortPeople([...deletedContacts, newContact], sortType);
      history.push("/");
    }
  };
  // Delete use confirmation
  const deletePermission = () => {
    let userConfirmation = window.confirm(
      "Are you sure you want to delete this Contact?"
    );
    if (userConfirmation) {
      deleteContact(contactToEdit);
      history.push("/");
    }
  };


  return (
    <Fragment>
      {contactToEdit && (
        <>
          <Container className="p-3">
            <Row>
              <Col md={12} className="text-left py-5 mt-3 ml-0 pl-0">
                <h1>Contact Details</h1>
                <div style={{ paddingLeft: "30px" }}>
                  <Button variant="secondary" onClick={goBack}>
                    <i className="fas fa-arrow-left mr-2"></i>back
                  </Button>
                </div>
              </Col>
            </Row>
            <Fragment>
              <Form onSubmit={saveEdit}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    First Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      defaultValue={contactToEdit.name.first}
                      type="text"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Last Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      defaultValue={contactToEdit.name.last}
                      type="text"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      defaultValue={contactToEdit.email}
                      type="email"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Phone
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      defaultValue={contactToEdit.phone}
                      type="input"
                    />
                  </Col>
                </Form.Group>
                <div style={{ padding: "10px", textAlign: "center" }}>
                  <Button
                    onClick={deletePermission}
                    variant="primary"
                    type="button"
                  >
                    Delete Contact
                  </Button>
                  <div
                    style={{
                      width: "20px",
                      height: "auto",
                      display: "inline-block",
                    }}
                  />
                  <Button variant="primary" type="submit">
                    Save Contact
                  </Button>
                </div>
              </Form>
              {emptyName ? (
                <h5
                  style={{ color: "red", padding: "20px", textAlign: "center" }}
                >
                  **Contacts must contain a first AND last name
                </h5>
              ) : null}
            </Fragment>
          </Container>
        </>
      )}
    </Fragment>
  );
};
export default Details;
