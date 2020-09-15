import React from 'react';
import { render } from '@testing-library/react';
import Gallery from './Gallery';

test('should render', () => {
    expect(render( < Gallery / > )).toBeTruthy();
});