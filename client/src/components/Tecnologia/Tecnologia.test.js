import React from 'react';
import { shallow } from 'enzyme';
import Tecnologia from './Tecnologia';

describe('<Tecnologia />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Tecnologia />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
