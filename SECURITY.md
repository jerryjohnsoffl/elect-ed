# Security Policy

## Supported Versions

The following versions of ElectEd receive active security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | ✅ Active support  |

## Reporting a Vulnerability

We take security seriously. If you discover a vulnerability in ElectEd, please report it responsibly.

**Do NOT open a public GitHub issue for security vulnerabilities.**

### How to Report

1. Email your report to the project maintainer (see README for contact).
2. Include a clear description of the vulnerability and steps to reproduce it.
3. Include the potential impact and any suggested fixes if known.

### What to Expect

- **Acknowledgement**: Within 48 hours of your report.
- **Status update**: Within 7 days with an assessment of the issue.
- **Fix timeline**: Critical issues will be patched within 14 days.

### Scope

In-scope vulnerabilities include:
- API key exposure or insecure environment variable handling
- Cross-Site Scripting (XSS) in user-generated content
- Injection attacks via the chat API
- Data exposure through the Gemini or Maps API integrations

Out of scope:
- Social engineering attacks
- Physical security issues
- Denial of service attacks on free-tier APIs

## Security Best Practices in This Project

- All API keys are stored as environment variables (`.env.local`) and never committed to the repository.
- The Gemini API is called server-side only via a Next.js API route — keys are never exposed to the client.
- HTTP security headers are set via `next.config.mjs` (X-Content-Type-Options, X-Frame-Options, CSP).
- User input to the chatbot is validated server-side before being forwarded to the AI model.
