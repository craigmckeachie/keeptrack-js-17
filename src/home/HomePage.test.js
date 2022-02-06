import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import App from '../App';
import renderer from 'react-test-renderer';

describe('<HomePage />', () => {
  test('should render without crashing', () => {
    render(<App />);
  });

  test('renders home heading', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', {
        name: /home/i,
      })
    ).toHaveTextContent('Home');
  });

  test('snapshot', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
