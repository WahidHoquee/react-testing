import React from 'react'
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment-1', 'Comment-2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList/>
    </Root>
  )
})

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
})

it('shows the text for each comment', () => {
  //Checking the inner text of the component which is  (COmment-1Comment-2) , Then we are checking if the rendered text contains the following keywords
  expect(wrapped.render().text()).toContain('Comment-1');
  expect(wrapped.render().text()).toContain('Comment-2');
})