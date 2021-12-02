// MODULES
import { Link, Route, Switch } from "react-router-dom";
import React, { Fragment, useState } from "react";
// PAGES
import Landing from "./pages/Landing";

// COMPONENTS
import Navigation from "./components/Navigation";
import AddContact from "./components/AddContact";
import Details from "./components/Details";
import NotFound from "./pages/NotFound/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = () => {
  const [people, setPeople] = useState(0);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [sortType, setSortType] = useState("first");
  
  // Check to make sure the first and last names of previous contact
  const sameFirstLastNameCheck = (person) => {
    const first = person.name.first.toLowerCase();
    const last = person.name.last.toLowerCase();
    for (let i = 0; i < people.length; i++) {
      if (
        people[i].name.first.toLowerCase() === first &&
        people[i].name.last.toLowerCase() === last
      ) {
        return true;
      }
    }
    return false;
  };

  // sorting contacts
  const sortPeople = (peoples, sortType) => {
    const sorted = peoples.sort((a, b) => {
      return a.name[sortType].localeCompare(b.name[sortType]);
    });
    setPeople(sorted);
    return sorted;
  };

  // adding a contact
  const addContact = (person) => {
    sortPeople([...people, person], sortType);
  };

  //delete contact
  const deleteContact = (person) => {
    const remainingPeople = people.filter((el) => {
      return el.login.uuid !== person.login.uuid;
    });
    sortPeople(remainingPeople, sortType);
    return remainingPeople;
  };

  // toggle sorting between first and last name
  const sortTypeToggle = (e) => {
    e.preventDefault();
    if (sortType === "first") {
      setSortType("last");
    } else {
      setSortType("first");
    }
  };

  return (
    <Fragment>
      <Route path="/" component={Navigation}></Route>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Landing
              people={people}
              sortPeople={sortPeople}
              setContactToEdit={setContactToEdit}
              sortType={sortType}
              sortTypeToggle={sortTypeToggle}
            />
          )}
        />
        <Route
          exact
          path="/addcontact"
          render={() => (
            <AddContact
              addContact={addContact}
              sameFirstLastNameCheck={sameFirstLastNameCheck}
            />
          )}
        />
        <Route
          exact
          path="/details"
          render={() => (
            <Details
              people={people}
              contactToEdit={contactToEdit}
              deleteContact={deleteContact}
              sortPeople={sortPeople}
              sortType={sortType}
              sameFirstLastNameCheck={sameFirstLastNameCheck}
            />
          )}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default App;
