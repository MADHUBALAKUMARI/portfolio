---
name: Next.js preview WebSockets
description: Replit artifact proxy requirements for Next.js development hot reload.
---

For Next.js development behind the Replit artifact preview, the browser uses the `127.0.0.1` origin. Add that host to Next.js `allowedDevOrigins`, and include `/_next/hmr` in the artifact service paths so the proxy forwards the WebSocket upgrade. Avoid `trailingSlash: true` in this setup because it redirects the HMR endpoint and breaks the handshake.

**Why:** The page rendered while hot reload failed with 502 responses. Testing the handshake showed Next.js rejected the preview origin, and trailing-slash redirection also interfered.

**How to apply:** When adapting a web artifact to Next.js, configure its preview origin and HMR route together, keep HMR paths free of redirects, and verify the preview browser reports that HMR connected.
