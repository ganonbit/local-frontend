/**
 * All available routes for the app
 */
const routes = {
  HOME: '/',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  VERIFY_ACCOUNT: '/verify',
  USER_PROFILE: '/:username',
  EXPLORE: '/explore',
  PEOPLE: '/people',
  NOTIFICATIONS: '/notifications',
  MESSAGES: '/messages/:userId',
  POST: '/post/:id',
  NEW_ID_VALUE: 'new',
};
export default routes;
