import React from 'react';
import ReactDOM from 'react-dom';
import AutocompleteUserName from './AutocompleteUserName';

const dataSource = [
		{name: 'Some Text', address: 'someFirstValue'},
		{name: 'Some Text', address: 'someSecondValue'},
	];

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<AutocompleteUserName dataSource={dataSource} maxSearchResults={2} />
		, div);
});

