import React from 'react';
import { shallow } from 'enzyme';
import MyQ from './MyQ';

describe('<MyQ />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MyQ />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
