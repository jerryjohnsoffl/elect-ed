import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import HowToVote from './HowToVote';

// Mock geolocation
const mockGeolocation = {
  getCurrentPosition: vi.fn(),
};

beforeEach(() => {
  vi.resetAllMocks();
  Object.defineProperty(global.navigator, 'geolocation', {
    value: mockGeolocation,
    configurable: true,
  });
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'test-maps-key';
});

describe('HowToVote Component', () => {
  it('renders the How to Vote heading', () => {
    render(<HowToVote />);
    expect(screen.getByText(/How to Vote/i)).toBeDefined();
  });

  it('renders the voting steps', () => {
    render(<HowToVote />);
    // Steps should be rendered from stepsData
    const steps = screen.getAllByRole('img', { hidden: true });
    expect(steps.length).toBeGreaterThan(0);
  });

  it('renders the polling place map section', () => {
    render(<HowToVote />);
    expect(screen.getByText(/Find a Polling Place Near You/i)).toBeDefined();
  });

  it('renders the Google Maps iframe', () => {
    render(<HowToVote />);
    const iframe = document.querySelector('iframe');
    expect(iframe).toBeTruthy();
    expect(iframe.src).toContain('google.com/maps');
  });

  it('shows the map disclaimer text', () => {
    render(<HowToVote />);
    expect(screen.getByText(/Use the map above/i)).toBeDefined();
  });

  it('updates map with geolocation when permission granted', async () => {
    mockGeolocation.getCurrentPosition.mockImplementation((success) => {
      success({ coords: { latitude: 40.7128, longitude: -74.006 } });
    });
    render(<HowToVote />);
    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
  });

  it('handles geolocation denial gracefully', () => {
    mockGeolocation.getCurrentPosition.mockImplementation((_, error) => {
      error({ message: 'User denied geolocation' });
    });
    // Should not throw
    expect(() => render(<HowToVote />)).not.toThrow();
  });
});
