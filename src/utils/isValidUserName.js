export const isValidUserName = username => {
  const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/
  return !usernameRegex.test(username)
    ? 'Usernames can only use letters, numbers, underscores and periods'
    : username.length > 20
    ? 'Username no more than 20 characters'
    : ''
}
