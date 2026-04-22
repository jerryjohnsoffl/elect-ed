import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Timeline from './Timeline';

describe('Timeline Component', () => {
  it('renders timeline items', () => {
    render(<Timeline />);
    // Check if the first phase exists (assuming 'Phase 1' or similar in timelineData)
    expect(screen.getByText(/Election Timeline/i)).toBeDefined();
  });

  it('toggles item expansion on click', () => {
    render(<Timeline />);
    
    // Find the first item (assuming it has a title we can click)
    const items = screen.getAllByText(/▼/i);
    const firstItemHeader = items[0].parentElement;
    
    // Before click, should not have 'open' class on the container
    // We need to find the parent container with class 'tl-item'
    const container = firstItemHeader.parentElement;
    expect(container.className).not.toContain('open');
    
    fireEvent.click(firstItemHeader);
    
    // After click, should have 'open' class
    expect(container.className).toContain('open');
    
    fireEvent.click(firstItemHeader);
    expect(container.className).not.toContain('open');
  });
});
