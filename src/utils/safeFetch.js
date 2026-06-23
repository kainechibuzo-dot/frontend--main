/**
 * Safe Fetch Wrapper - Prevents "Unexpected token <" errors
 * Always handles both JSON and non-JSON responses gracefully
 */

export async function safeFetch(url) {
  try {
    const res = await fetch(url);

    const text = await res.text();

    // Try parse JSON
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("Non-JSON response:", text);

      return {
        ok: false,
        error: "Invalid JSON response from server",
        raw: text,
      };
    }
  } catch (err) {
    console.error("Network error:", err);
    return {
      ok: false,
      error: "Network error",
      details: err.message,
    };
  }
}
