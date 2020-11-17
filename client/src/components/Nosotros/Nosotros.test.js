import React from 'react';
import { shallow } from 'enzyme';
import Nosotros from './Nosotros';

describe('<Nosotros />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Nosotros />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
