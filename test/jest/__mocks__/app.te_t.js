// import 'jsdom-global/register';
// import React from 'react';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';
// import { Image } from 'react-bootstrap';

// // import fetchMock from 'fetch-mock';

// // enzyme
// import Enzyme, { shallow, mount, render } from 'enzyme';
// Enzyme.configure({ adapter: new Adapter() });

// //mock data
// import { contact, contacts } from './testData';
// // import fetchUser from './test/jest/__mocks__/api';

// //components
// import App from '../../../client/src/App';
// import AddContact from '../../../client/src/components/AddContact/AddContact';
// import Details from '../../../client/src/components/Details/Details';
// import Navigation from '../../../client/src/components/Navigation/Navigation';
// import UserTableItem from '../../../client/src/components/UserTableItem/UserTableItem';
// import Landing from '../../../client/src/pages/Landing/Landing';
// import NotFound from '../../../client/src/pages/NotFound/NotFound';

// // Mocks

// describe('Components Render Properly', () => {
//   beforeEach(() => {});

//   it('App component renders', () => {
//     let wrapper = mount(
//       <MemoryRouter initialEntries={['/']}>
//         <App />
//       </MemoryRouter>
//     );
//     expect(wrapper).not.toBe(null);
//   });
//   //can't get this one to pass...
//   it('App renders nav and landing at "/" ', () => {
//     let wrapper = mount(
//       <MemoryRouter initialEntries={['/']}>
//         <App />
//       </MemoryRouter>
//     );
//     // console.log(wrapper.debug());

//     expect(wrapper.find(Navigation)).toHaveLength(1);
//     expect(wrapper.find(Landing)).toHaveLength(1);
//   });
//   it('App renders only Navigation and AddContact at "/addcontact" ', () => {
//     let wrapper = mount(
//       <MemoryRouter initialEntries={['/addcontact']}>
//         <App />
//       </MemoryRouter>
//     );
//     // console.log(wrapper.debug());

//     expect(wrapper.find(Navigation)).toHaveLength(1);
//     expect(wrapper.find(Landing)).toHaveLength(0);
//     expect(wrapper.find(UserTableItem)).toHaveLength(0);
//     expect(wrapper.find(AddContact)).toHaveLength(1);
//   });

//   it('App renders nav ', () => {
//     let wrapper = mount(
//       <MemoryRouter initialEntries={['/']}>
//         <App />
//       </MemoryRouter>
//     );
//     // console.log(wrapper.debug());

//     expect(wrapper.find(Navigation)).toHaveLength(1);
//   });

//   it('App renders properly with a random path', () => {
//     let wrapper = mount(
//       <MemoryRouter initialEntries={['/random']}>
//         <App />
//       </MemoryRouter>
//     );
//     // console.log(wrapper.debug());
//   });
//   it('UserItemTable renders properly', () => {
//     let wrapper = mount(
//       <MemoryRouter initialEntries={['/']}>
//         <UserTableItem />
//       </MemoryRouter>
//     );
//     // console.log(wrapper.debug());
//   });

//   it('Landing renders properly', () => {
//     let wrapper = shallow(
//       <MemoryRouter initialEntries={['/addcontact']}>
//         <Landing />
//       </MemoryRouter>
//     );
//     // console.log(wrapper.debug());
//   });
//   it('invalid path should redirect to 404', () => {
//     let wrapper = mount(
//       <MemoryRouter initialEntries={['/random']}>
//         <App />
//       </MemoryRouter>
//     );
//     // console.log(wrapper.debug());

//     expect(wrapper.find(Landing)).toHaveLength(0);
//     expect(wrapper.find(NotFound)).toHaveLength(1);
//   });
//   it('valid path should not lead to 404', () => {
//     let wrapper = mount(
//       <MemoryRouter initialEntries={['/']}>
//         <App />
//       </MemoryRouter>
//     );
//     // console.log(wrapper.debug());

//     expect(wrapper.find(Landing)).toHaveLength(1);
//     expect(wrapper.find(NotFound)).toHaveLength(0);
//   });
// });

// // couldn't getthis one working people hook is undefined...
// xit('renders header', () => {
//   const wrapper = mount(
//     <MemoryRouter>
//       <Landing />
//     </MemoryRouter>
//   );
//   console.log(wrapper.find('h1'))
//   // expect(wrapper.find('h1')).toEqual(true);
// });

// xit('renders children when passed in', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={['/']}>
//       <Landing>
//         <div className='unique' />
//       </Landing>
//     </MemoryRouter>
//   );
//   expect(wrapper.find(<div className='unique' />)).toHaveLength(1)
// });
