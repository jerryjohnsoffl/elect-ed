import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Overview from './Overview';

// Mock fetch for Gemini fact
global.fetch = vi.fn();

describe('Overview Component', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ reply: 'Test civic fact from Gemini.' }),
    });
  });

  it('renders the section heading', () => {
    render(<Overview onNavigate={mockNavigate} />);
    expect(screen.getByText(/Understanding Elections/i)).toBeDefined();
  });

  it('renders all 4 navigation cards', () => {
    render(<Overview onNavigate={mockNavigate} />);
    expect(screen.getByText('Election Timeline')).toBeDefined();
    expect(screen.getByText('How to Vote')).toBeDefined();
    expect(screen.getByText('Test Yourself')).toBeDefined();
    expect(screen.getByText('Glossary')).toBeDefined();
  });

  it('calls onNavigate when a card is clicked', () => {
    render(<Overview onNavigate={mockNavigate} />);
    fireEvent.click(screen.getByText('Election Timeline'));
    expect(mockNavigate).toHaveBeenCalledWith('timeline');
  });

  it('calls onNavigate with correct tab for each card', () => {
    render(<Overview onNavigate={mockNavigate} />);
    const cardMap = {
      'Election Timeline': 'timeline',
      'How to Vote': 'howtovote',
      'Test Yourself': 'quiz',
      'Glossary': 'glossary',
    };
    Object.entries(cardMap).forEach(([label, tab]) => {
      fireEvent.click(screen.getByText(label));
      expect(mockNavigate).toHaveBeenCalledWith(tab);
    });
  });

  it('renders the key facts bar', () => {
    render(<Overview onNavigate={mockNavigate} />);
    expect(screen.getByText('Levels of Govt.')).toBeDefined();
    expect(screen.getByText('Voting Age')).toBeDefined();
    expect(screen.getByText('Your Voice Counts')).toBeDefined();
  });

  it('renders AI Civic Fact section', () => {
    render(<Overview onNavigate={mockNavigate} />);
    expect(screen.getByText(/AI Civic Fact of the Day/i)).toBeDefined();
  });

  it('loads and displays the civic fact from Gemini', async () => {
    render(<Overview onNavigate={mockNavigate} />);
    await waitFor(() => {
      expect(screen.getByText('Test civic fact from Gemini.')).toBeDefined();
    });
  });

  it('shows a fallback fact if Gemini fetch fails', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));
    render(<Overview onNavigate={mockNavigate} />);
    await waitFor(() => {
      expect(screen.getByText(/secret ballot/i)).toBeDefined();
    });
  });

  it('renders the Why Voting Matters section', () => {
    render(<Overview onNavigate={mockNavigate} />);
    expect(screen.getByText(/Why Does Voting Matter/i)).toBeDefined();
  });

  it('supports keyboard navigation on cards', () => {
    render(<Overview onNavigate={mockNavigate} />);
    const card = screen.getByLabelText('Navigate to Election Timeline');
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(mockNavigate).toHaveBeenCalledWith('timeline');
  });
});
