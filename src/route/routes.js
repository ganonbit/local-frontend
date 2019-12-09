/**
 * All available routes for the app
 */
const routes = {
  HOME: '/',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  VERIFY_ACCOUNT: '/verify',
  USER_PROFILE: '/:username',
  DISCOVER: '/DISCOVER',
  PEOPLE: '/people',
  NOTIFICATIONS: '/notifications',
  MESSAGES: '/messages/:userId',
  POST: '/post/:id',
  NEW_ID_VALUE: 'new',
  SETTINGS:  `/settings`
};
export default routes;
