//modules
import React from 'react';
import { ListGroup } from 'react-bootstrap';

// COMPONENTS
import UserTableItem from '../UserTableItem';

const UserTable = ({ people, setContactToEdit,searchInput }) => {
  return (
    <ListGroup as='ol' >
      <UserTableItem people={people} setContactToEdit={setContactToEdit} searchInput={searchInput}/>
    </ListGroup>
  );
};

export default UserTable;
