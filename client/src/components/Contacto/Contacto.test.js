import React from 'react';
import { shallow } from 'enzyme';
import Contacto from './Contacto';

describe('<Contacto />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Contacto />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
