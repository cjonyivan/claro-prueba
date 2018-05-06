import React from 'react'; 
import { configure, shallow } from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16'; 
import Header from '../../src/js/views/Header/index'; 
 
configure({ adapter: new Adapter() }); 
 
describe('Section principal page', () => { 
  let component; 
 
  beforeEach(() => { 
    component = shallow(<Header />); 
  }); 
 
  it('should exist', () => { 
    expect(component).toBeDefined(); 
  }); 
 
}); 