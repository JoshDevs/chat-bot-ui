import App from './App';
import {render, screen} from '@testing-library/react';
import React from 'react';

describe('[App]', () => {
	beforeEach(() => {
		render(<App />);
	});
	it('should render component', () => {
		const app = screen.getByTestId('app-container');

		expect(app).toBeInTheDocument();
	});
});