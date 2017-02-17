import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-enzyme';

import { mount } from 'enzyme';
import UserSearchModal from './UserSearchModal';
import ReactTestUtils from 'react-addons-test-utils';
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<UserSearchModal></UserSearchModal>
		, div);
});

it('check modal state', () => {
	const wrapper = mount(<UserSearchModal></UserSearchModal>);
	expect(wrapper.state().open).to.equal(false);
});