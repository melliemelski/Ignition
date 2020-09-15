import React from 'react';
import { render } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

test('should render', () => {
    expect(render( < ImageCarousel / > )).toBeTruthy();
});