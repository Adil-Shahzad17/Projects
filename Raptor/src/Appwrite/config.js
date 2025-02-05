const config = {
  pexels_api_key: String(import.meta.env.VITE_PEXELS_API_KEY),
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  EMAIL_JS_SERVICE_ID: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  EMAIL_JS_TEMPLATE_ID: String(import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID),
  EMAIL_JS_PUBLIC_KEY: String(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY),
};

export default config;
