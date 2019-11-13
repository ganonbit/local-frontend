export const isValidUserName = username => {
  const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

  if (!username) {
    return "Name is Requried";
  } else if (username.length > 20) {
    return "User name must be less than 20 characteres";
  } else if (!usernameRegex.test(username)) {
    return "Usernames can only use letters, numbers, underscores and periods";
  }

  return "";
};
