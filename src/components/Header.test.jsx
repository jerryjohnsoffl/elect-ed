import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('renders the application title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Elect/i);
    expect(titleElement).toBeDefined();
    
    const edSpan = screen.getByText(/Ed/i);
    expect(edSpan).toBeDefined();
  });

  it('renders the tagline', () => {
    render(<Header />);
    const tagline = screen.getByText(/Your Interactive Guide to the Democratic Process/i);
    expect(tagline).toBeDefined();
  });

  it('renders the stars decoration', () => {
    render(<Header />);
    const stars = screen.getByText(/★ ★ ★/i);
    expect(stars).toBeDefined();
  });
});
