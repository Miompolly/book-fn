export const imageService = {
  getImageUrl(path: string): string {
    if (!path) return "";

    // Base API URL from environment or fallback
    const baseUrl =
      import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
      "http://127.0.0.1:8000";

    // If the path is already a full URL, return it as-is
    if (path.startsWith("http")) {
      return path;
    }

    // If path starts with /media/, prepend base URL directly
    if (path.startsWith("/media/")) {
      return `${baseUrl}${path}`;
    }

    // Otherwise, add /media/ prefix
    return `${baseUrl}/media/${path}`;
  },
};
