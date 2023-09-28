import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from '../../app/App';
import PopularPosts from '../../api/popularPosts/PopularPosts';
import '@testing-library/jest-dom'

test('renders the h1 tag', () => {
    render(<App />);
    
    const h1  = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent('A simple REDdit APP');
  
});

test('renders the p tag', () => {
    render(<App />);
    
    const matcher  = screen.getByText('Search, view posts and comments from the Reddit API');
    expect(matcher).toBeInTheDocument();
  
});

test('check if search component is rendered', async ()=>{
    render(<App />);

    const matcher  = screen.getByPlaceholderText('Search-Posts');
    expect(matcher).toBeInTheDocument();


});

