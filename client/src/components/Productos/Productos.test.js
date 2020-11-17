import React from 'react';
import { shallow } from 'enzyme';
import Productos from './Productos';

describe('<Productos />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Productos />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
