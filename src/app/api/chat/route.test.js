import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from './route';

// Mock fetch globally
global.fetch = vi.fn();

describe('Chat API Route', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    process.env.GEMINI_API_KEY = 'test-key';
  });

  it('returns 400 if message is missing', async () => {
    const request = new Request('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Message is required');
  });

  it('returns 500 if API key is missing', async () => {
    delete process.env.GEMINI_API_KEY;
    
    const request = new Request('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: 'Hello' }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Gemini API key not configured');
  });

  it('returns successful AI response structure', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        candidates: [{
          content: {
            parts: [{ text: 'This is a test response.' }]
          }
        }]
      }),
    });

    const request = new Request('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: 'What is voting?' }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.reply).toBe('This is a test response.');
  });

  it('handles external API failures', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 502,
      text: () => Promise.resolve('Bad Gateway'),
    });

    const request = new Request('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: 'Hello' }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(502);
    expect(data.error).toBe('Failed to get response from AI');
  });
});
