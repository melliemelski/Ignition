import React from 'react';
import { render } from '@testing-library/react';
import Jumbotron from './Jumbotron';

test('should render', () => {
    expect(render( < Jumbotron / > )).toBeTruthy();
});