import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('<Menu />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Menu />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
