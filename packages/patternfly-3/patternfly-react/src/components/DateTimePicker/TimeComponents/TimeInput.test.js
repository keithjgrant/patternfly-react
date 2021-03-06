import React from 'react';
import { mount, shallow } from 'enzyme';
import TimeInput from './TimeInput';

test('TimeInput is working properly', () => {
  const time = new Date('2019-01-04 14:22:31');
  const component = shallow(<TimeInput time={time} />);

  expect(component.render()).toMatchSnapshot();
});
test('TimeInput toggles view to hours', () => {
  const time = new Date('2019-01-04 14:22:31');
  const component = mount(<TimeInput time={time} />);
  component
    .find('.timepicker-hour')
    .first()
    .simulate('click');
  expect(component.render()).toMatchSnapshot();
});
test('TimeInput toggles view to minutes', () => {
  const time = new Date('2019-01-04 14:22:31');
  const component = mount(<TimeInput time={time} />);
  component
    .find('.timepicker-minute')
    .first()
    .simulate('click');
  expect(component.render()).toMatchSnapshot();
});
test('TimeInput is working properly with wrong time prop', () => {
  const time = new Date('ABC');
  const component = shallow(<TimeInput time={time} />);
  const componentTime = component.get(0).props.children.props.time;
  const nowTime = new Date();
  expect(componentTime.getHours() === nowTime.getHours()).toBeTruthy();
});
