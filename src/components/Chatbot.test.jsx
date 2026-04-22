import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Chatbot from './Chatbot';

// Mock fetch
global.fetch = vi.fn();

// Mock scrollIntoView (not implemented in jsdom)
window.HTMLElement.prototype.scrollIntoView = vi.fn();

describe('Chatbot Component', () => {
  it('renders the initial greeting', () => {
    render(<Chatbot />);
    expect(screen.getByText(/Hi! I'm ElectEd/i)).toBeDefined();
  });

  it('allows typing a message', () => {
    render(<Chatbot />);
    const input = screen.getByPlaceholderText(/Type a question…/i);
    fireEvent.change(input, { target: { value: 'How do I vote?' } });
    expect(input.value).toBe('How do I vote?');
  });

  it('sends a message and displays bot response', async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ reply: 'You can vote at your local polling station.' }),
    });

    render(<Chatbot />);
    
    // Open the chatbot if it's closed (it starts closed usually, but let's check)
    const fab = screen.getByRole('button', { name: /Ask a question/i });
    fireEvent.click(fab);

    const input = screen.getByPlaceholderText(/Type a question…/i);
    const sendBtn = screen.getByText('➤');

    fireEvent.change(input, { target: { value: 'How do I vote?' } });
    fireEvent.click(sendBtn);

    // Check if user message appears
    expect(screen.getByText('How do I vote?')).toBeDefined();

    // Check if bot response appears
    await waitFor(() => {
      expect(screen.getByText(/You can vote at your local polling station/i)).toBeDefined();
    });
  });

  it('handles chip clicks', async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ reply: 'Registration is easy!' }),
    });

    render(<Chatbot />);
    
    const fab = screen.getByRole('button', { name: /Ask a question/i });
    fireEvent.click(fab);

    const chip = screen.getByText('How do I register?');
    fireEvent.click(chip);

    expect(screen.getAllByText('How do I register?').length).toBeGreaterThan(0);
    await waitFor(() => {
      expect(screen.getByText(/Registration is easy!/i)).toBeDefined();
    });
  });
});
