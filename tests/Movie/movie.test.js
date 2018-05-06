import React from 'react'; 
import { configure, shallow } from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16'; 
import Movie from '../../src/js/views/Movie/index'; 
 
configure({ adapter: new Adapter() }); 
 
describe('Section Movie page', () => { 
  let component; 
 
  beforeEach(() => { 
    component = shallow(<Movie  match={{params: {name:"En-la-Luna",id:769573}}} />); 
  }); 
 
  it('should exist', () => { 
    expect(component).toBeDefined(); 
  }); 
 
}); 