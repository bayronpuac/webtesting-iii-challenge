import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Control from './Controls';

test('Controls renders correctly', () => {
    render(<Control />)
});


test('button toggles closed and locked functions', () => {
    const toggleClosed = jest.fn();
    const toggleLocked = jest.fn();
    const { getByText } = render(
        <Control 
        toggleClosed={toggleClosed}
        toggleLocked={toggleLocked}
        locked={false}
        closed={true}
        />
    )
    const locked = getByText('Lock Gate')
    fireEvent.click(locked)
    expect(toggleLocked).toBeCalled();

    const closed = getByText('Open Gate')
    fireEvent.click(closed)
    expect(toggleClosed).toBeCalled();
})


test('locked is disabled if gate is open', () => {
    const closed = jest.fn();
    const { getByText } = render(
        <Control 
        toggleClosed={closed}
        locked={false}
        closed={true}
        />
    )
    const locked = getByText('Lock Gate')
    fireEvent.click(locked)
    expect(closed).toBeCalledTimes(0)
})



test('open is disabled if locked',() => {
    const locked = jest.fn()

    const { getByText} = render (
        <Control
            toggleLocked={locked}
            locked={true}
            closed={true}

        />
    )

    const open = getByText('Open Gate')
    fireEvent.click(open)
    expect(locked).toBeCalledTimes(0)
})