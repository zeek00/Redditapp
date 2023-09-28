import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '../../components/Button/Button';
import { MemoryRouter } from 'react-router'
import '@testing-library/jest-dom'

test('displays the button component', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <Button />
        </MemoryRouter>
    );
    const buttonElement = screen.getByTestId("button-1");
    expect(buttonElement).toBeInTheDocument();
});