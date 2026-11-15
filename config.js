/**
 * BridgeMate / Meri Deployment Configuration for Savanna Host
 * Automatically switches between local development and production Render backend.
 */
(() => {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  // Set default backend: localhost in dev, or Render in production
  const defaultApiBase = isLocal ? 'http://localhost:8000' : 'https://meri-back.onrender.com';
  
  // Allow overriding via localStorage for testing (e.g. localStorage.setItem('MERI_API_BASE', 'https://your-custom-render.onrender.com'))
  const activeApiBase = window.localStorage.getItem('MERI_API_BASE') || defaultApiBase;

  window.__MERI_API_BASE__ = activeApiBase;
  window.__MERI_CONFIG__ = {
    apiBase: activeApiBase,
    publicKey: 'pk_live_savanna_sample_12345'
  };

  console.log(`[BridgeMate Savanna] Active Backend API Base: ${activeApiBase}`);
})();
