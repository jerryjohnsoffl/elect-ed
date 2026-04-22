import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NavTabs from './NavTabs';

describe('NavTabs Component', () => {
  const onTabChange = vi.fn();

  it('renders all tab buttons', () => {
    render(<NavTabs activeTab="overview" onTabChange={onTabChange} />);
    expect(screen.getByText(/Overview/i)).toBeDefined();
    expect(screen.getByText(/Timeline/i)).toBeDefined();
    expect(screen.getByText(/How to Vote/i)).toBeDefined();
    expect(screen.getByText(/Quiz/i)).toBeDefined();
    expect(screen.getByText(/Glossary/i)).toBeDefined();
  });

  it('calls onTabChange when a tab is clicked', () => {
    render(<NavTabs activeTab="overview" onTabChange={onTabChange} />);
    
    const timelineBtn = screen.getByText(/Timeline/i);
    fireEvent.click(timelineBtn);
    
    expect(onTabChange).toHaveBeenCalledWith('timeline');
  });

  it('applies the active class to the current tab', () => {
    render(<NavTabs activeTab="quiz" onTabChange={onTabChange} />);
    const quizBtn = screen.getByText(/Quiz/i);
    expect(quizBtn.className).toContain('active');
  });
});
