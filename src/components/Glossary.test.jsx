import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Glossary from './Glossary';

describe('Glossary Component', () => {
  it('renders the search input', () => {
    render(<Glossary />);
    expect(screen.getByPlaceholderText(/Search terms.../i)).toBeDefined();
  });

  it('filters glossary items based on search input', () => {
    render(<Glossary />);
    const searchInput = screen.getByPlaceholderText(/Search terms.../i);
    
    // Type something that exists (assuming 'Ballot' exists in electionData)
    fireEvent.change(searchInput, { target: { value: 'Ballot' } });
    
    // Check if the term is visible (using getAllByText because it might appear in definition too)
    const items = screen.getAllByText(/Ballot/i);
    expect(items.length).toBeGreaterThan(0);
  });

  it('shows no results message when no terms match', () => {
    render(<Glossary />);
    const searchInput = screen.getByPlaceholderText(/Search terms.../i);
    
    fireEvent.change(searchInput, { target: { value: 'NonExistentTermXYZ' } });
    
    expect(screen.getByText(/No terms found for/i)).toBeDefined();
  });

  it('clears the search when the X button is clicked', () => {
    render(<Glossary />);
    const searchInput = screen.getByPlaceholderText(/Search terms.../i);
    const clearBtn = screen.getByText('✕');
    
    fireEvent.change(searchInput, { target: { value: 'Test' } });
    expect(searchInput.value).toBe('Test');
    
    fireEvent.click(clearBtn);
    expect(searchInput.value).toBe('');
  });
});
