// When Jest load up,It first execute this file automatically
// So we can pre-configure here
// Thats why we are doing setup of "Enzyme" library here.

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter() 
})