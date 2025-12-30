
// Use environment variable if available, otherwise fallback to relative path (for local dev proxy)
// In production on Vercel, this should point to your Render backend URL
// For local dev, Vite proxy handles /api -> localhost:3000
export const API_BASE_URL = import.meta.env.VITE_API_URL || "";
