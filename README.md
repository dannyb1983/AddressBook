# Engineering Challenge - Web FrontEnd

### Build the web frontend client of an “Address Book” application

- [Engineering Challenge - Web FrontEnd](#engineering-challenge---web-frontend)
    - [Build the web frontend client of an “Address Book” application](#build-the-web-frontend-client-of-an-address-book-application)
  - [Deployment Steps](#deployment-steps)
- [How to use the app](#how-to-use-the-app)
- [Summary](#summary)
  - [The assignment](#the-assignment)
- [Approach](#approach)
  - [Overall Approach](#overall-approach)
  - [UI/UX](#uiux)
  - [TDD](#tdd)
  - [Technologies](#technologies)
  - [React](#react)
  - [Choosing State Management](#choosing-state-management)
  - [Conclusion](#conclusion)
- [Features](#features)
  - [Stretch Features](#stretch-features)

## Deployment Steps

- Fork this Repository
- Clone to your local machine (make sure you have Node.js installed)
- In your terminal, navigate to the location of this project.
- Instal local dependencies

```
  npm install
```

- To start application

```
  npm start
```

</br>

  note: This should prompt your web browser to open a window, otherwise, manually navigate to [http://localhost:8080/](http://localhost:8080/)

</br>
</br>

# How to use the app

- You begin by seeing your contacts displayed on the landing page
- To view or edit of the details of a specific contact, just mouse over to the contact and click.
- If you want to add a new user, click the `Add User` link in the Nav bar.
- You can always return to your list of contacts by clicking on the `Address Book` link in the Nav bar.
- **Note because there is no database connected to the app currently, refreshing your browser will cause a your contacts to be reset.**

</br>

# Summary

</br>

## The assignment

- Build the web frontend client of an “Address Book” application
  - Web client should initially display the list of persons from the address book.
  - The user should be able to select a contact from the list in order to see more details about that contact
  - Contacts can be retrieved from [randomuser.me](https://randomuser.me/)
- Hints
  - User should see the list of persons from the address book
  - User should be able to select a person from the list and navigate to a details page
    - User should be able to see the Contact's first name, last name, phone number on the details page
- Deliverables
  - A summary of the assignment
  - Your overall approach
  - What features you implemented
  - Given more time, what else would you have liked to complete and how long it would have taken you?
  - Given more time, what else would you have done to make the project more robust?
  - Production-ready code that:
    - Your code checked into a git repository that can be shared with us (Github, Gitlab, Bitbucket, etc…). We should be able to run the code
    - Follows community standard syntax and style
    - Has no debug logging, TODOs, or FIXMEs
    - Has test coverage to ensure quality and safety

</br>

# Approach

## Overall Approach

My approach to building this app was to first consider the features I knew I wanted to implement.
I knew I wanted to start with:
- Landing page with users in a table.
- Details page (ideally with ability to edit and delete users)
- Add contact page and form 

## UI/UX

Next I considered the user experience and decided that a search functionality would be important. At the very least the application must have the ability to sort users. I drew up a sketch design for what the main app would look like and made a quick wire frame for how I wanted to design the hierarchy for app's components.


 ## TDD

Once I built a skeleton of the app, I wrote units tests for my components with ```jest/react-testing-library```. Snapshots and window render tests provided basic coverage within my scope. This helped manage potential errors through further development.

The component I wanted to start with was the Landing page. This was going to be my source of data. I worked my way to the ```UserTableItem``` component where each individual contact would be displayed. From there, I built one component at a time. Of course I was being mindful of state throughout this process. I was asking things like:

  - Does the reality of what I've built match my wire frame? What deviations are necessary? Why?
  - Is this the component located in best place for this application?
  - What other features might be necessary in this component?
  - Where should I be storing state for this component?
  - Is the state in this component going to be needed by other components? If so, which ones? How will it get there?
  - Is this a display or functional component? 
  - How am I going to layout/style this component?
  - Is this code efficient?
  - Is this code readable? Will it be difficult for someone else to understand?

Once the remaining components were built and functioning as intended, I added more tests to increase the app's reliability.
</br>
## Technologies

## React

React is responsive, efficient, has clear documentation, and immense support for debugging and libraries. My prior experience with this SPA made it the obvious choice.

</br>

## Choosing State Management

Oh the tradeoffs! There is a tradeoff with every state management solution. It's important to be aware of the sacrifices you're making when choosing how to manage state. Here were some of my considerations:

- First I thought of Redux. I appreciate it's predictability and single source of truth. The cost of time for implementing this technology would heavily outweight the benefit. The application is simple and won't be needing extensive, scalable data management.
  
- Next I considered using React's Context API. Though it has some reliability issues at scale, in smaller applications it can be a fantastic solution. Considering the size/complexity this Address Book app, I felt that using Context was a good potential option.
  
- Considering none of my state was going to be needed past 3 component levels, the simple choice of prop drilling solved many of my issues without the time consuming overhead. This was the clear choice when building my app. 
  
## Conclusion

I considerd the size and potential structure of this Address Book app. I considered the fact that the app has no backend (besides the `randomuser.me` endpoint) or database to connect to. I didn't see a significant need for a global state management. So in this case, I decided that ```prop drilling``` would be the most appropriate and mature choice. I provided surface level coverage for my components with ```jest``` and ```react-testing-library```. Beyond the component logic, I also leveraged the react-bootstrap component library for responsive elements and ```mobile friendly``` design. With a handful of features I deemed required like a ```search``` and ```sort```, I finished development and pushed to source control. 

# Features

Though it wasn't explicitly stated, I couldn't imagine building an Address Book without CRUD functionality. As I considered the number of contacts someone might keep in their Address Book (hundreds or potentially thousands), I realized a search function would be extremely helpful.
Here are some of the features I included:

>  - Retrieve Contacts
>  - View details of existing contacts
>  - Edit the details of existing contacts (ex: change a contat's name/phone/email)
>  - Add a new contact
>  - Delete a contact
>  - search function (search for a specific contact)
>  - App is both "Mobile friendly" and responsive

## Stretch Features

> - Ability to paginate results
> - Finish building out sorting functionality and add more sorting options
> - Add the ability to categorize the contacts
> - Add the ability to delete multiple users at once
> - Give users the ability to save multiple address books (ex: 1 address book for just work contacts, a different address for personal)  
> - Add more testing!
> - Integrate database to permanently save user data 
> - Save contacts to local memory in browser (if not a database)
> - add user login / security
> - Deploy this front-end app to aws using the serverless framework

Some of these features are simpler, but some of them could become complex depending on how far we want to go with them. That makes understanding the scope difficult. That being said, I believe I could probably complete most of these stretch features within a few days.

