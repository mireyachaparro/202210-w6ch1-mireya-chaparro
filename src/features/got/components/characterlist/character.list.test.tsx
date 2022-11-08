import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CharacterList } from './character.list';

describe('Given CharacterList component', () => {
    describe('When we render the component', () => {
        test('Then it should display "personaje"', () => {
            render(
                <Router>
                    <CharacterList />
                </Router>
            );
            const element = screen.getByText(/personaje/i);
            expect(element).toBeInTheDocument();
        });
    });
});
