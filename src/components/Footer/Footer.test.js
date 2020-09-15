import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('should render', () => {
    expect(render( < Footer / > )).toBeTruthy();
});