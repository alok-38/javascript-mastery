import { authMiddleware } from '@clerk/nextjs';
import { useRouter } from 'next/router';

// Define your custom afterAuth function
const afterAuth = async ({ Clerk, redirectTo, router }) => {
  let currentPath = '/'; // Default to root path

  if (router && router.asPath) {
    currentPath = router.asPath; // Get the current route pathname
  }

  // Check if the current route is not in publicRoutes
  if (!['/', '/auth', '/portal', '/images', '/favicon.ico'].some(route => currentPath.startsWith(route))) {
    await redirectTo('/'); // Redirect to '/' for routes not in publicRoutes
  }
};

export default authMiddleware({
  publicRoutes: ['/', '/auth', '/portal', '/images', '/favicon.ico'],
  ignoredRoutes: ['/chatbot', '/favicon.ico'],
  afterAuth: afterAuth, // Pass your custom afterAuth function here
});
