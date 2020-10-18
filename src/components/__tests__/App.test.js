/*
  Using Enzyme
  - It is react freindly.Instead of playing with DOM, We can directly test usiong component
  - It has three categories of API:
      1. Static - 
      2. Shallow - It will just render the passed component none of its react-child component will be rendered. But its child     basic HTML code will be rendered also.
      3. Full DOM - Render the component and all of its children + let us modify it afterwards
*/

import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList';

let wrapped;

// This function will be executed before each "it" test
beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows the comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})








// import React from 'react'
// import ReactDOM from 'react-dom'

// import App from '../App';

// it('Shows a comment Box', () => {
   /*
//    We know DOM is supported only in browser
//       Jest -> Automated Test Runner
//       JSDOM -> Simulates how a browser behaves in terminal
   */
//   const div = document.createElement('div');

//   //The HTML of App will be placed inside that div.
//   ReactDOM.render(<App/>, div);

//? To check if there is CommentBox & CommentList Component inside that.
//   // console.log(div.innerHTML)

//   //Cleanup the memory s[ace]
//   ReactDOM.unmountComponentAtNode(div)
// })