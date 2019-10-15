import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

test('Dispaly renders correctly', () => {
    render(<Display />)
})

test('shows open and unlocked on render', () => {
    const { getByText } = render(<Display />)
    getByText('Open')
    getByText('Unlocked')
})

test('can show closed and locked', () => {
    const { getByText} = render(
    <Display 
    locked={true} 
    closed={true}
    />
    )
    getByText('Locked')
    getByText('Closed')
})

test('green led', () => {
    const { getByText } = render(
    <Display 
    closed={false} 
    locked={false}
    />
    )
    expect(getByText('Open'))
})

test('red led', () => {
    const { getByText } = render(
    <Display closed={true} locked={true}
    />
    )
    expect(getByText('Closed'))
}) 