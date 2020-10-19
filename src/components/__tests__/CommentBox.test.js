import React from 'react'
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from '../../Root';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => {
  //To avoid collapse with other "it" statement
  //Mount renders a single dom
  component.unmount()
})

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1)
  expect(component.find('button').length).toEqual(1)
})

describe('the textarea', () => {
  beforeEach(() => {
    //!We can avoid code duplication by the following way. But for understanding i am not changing it
    // component.find('textarea').simulate('change', {
    //   target: {
    //     value: 'New Comment'
    //   }
    // })
    // component.update(); 
  })

  it('has a text area that users can type in', () => {
    /*
      1. Find the element
      2. Simulate the Change Event - enzyme
      3. Providing fake event objects, The object we passed through the simulate function will be merged with eventhanldlers event object.
    */
    component.find('textarea').simulate('change', {
      target: {
        value: 'New Comment'
      }
    })

    // 4. Force the component to rerender. React state update is asynchronous task.
    component.update(); 

    // 5. To check if the textarea value and the submitted value are same
    expect(component.find('textarea').prop('value')).toEqual('New Comment')
  })

  it('submits the input, makes empty the textarea', () => {
    // 1. Providing the textarea value to simulate like a data entry
    component.find('textarea').simulate('change', {
      target: {
        value: 'New Comment'
      }
    })
    component.update(); 

    // 2. Simulating as a form submission
    component.find('form').simulate('submit');
    component.update();

    // 3. Checking if the value is Empty
    expect(component.find('textarea').prop('value')).toEqual('')
  })

})
