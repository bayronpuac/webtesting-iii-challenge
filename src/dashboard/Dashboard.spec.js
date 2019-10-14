import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from './Dashboard'
import Display from '../display/Display'
import Controls from '../controls/Controls'


test('render display component', () => {
    render(
        <Display />
    )
})

test('render controls component', () => {
    render(
        <Controls />
    )
}) 