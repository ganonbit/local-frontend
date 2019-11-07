import { isValidUserName, isValidEmail } from './index'
export const validateFormField = (name, value) => {
  switch (name) {
    case 'emailOrUsername':
      if (!isValidEmail(value) && !(isValidUserName(value).length === 0))
        return { emailOrUsername: 'Email or UserName is Not valid' }
        else
        return {emailOrUsername:''}

    case 'password':
      if (value.length < 5) return { password: 'Password min 6 characters' }
      else
        return {password:''}
    case 'fullName':
      if (value.length > 50)
        return { fullName: 'Full name no more than 50 characters' }
      else if (value.length < 1) return { fullName: 'All Field are Required' }
      else
      return {fullName:''}

    case 'username':
      let usernameError = isValidUserName(value)
      if (usernameError.length > 1) return { username: usernameError }
      else
      return {username:''}

    case 'email':
      if (!isValidEmail(value)) return { email: 'Email is Not valid' }
      else
      return {email:''}

    default:
      break
  }
}
