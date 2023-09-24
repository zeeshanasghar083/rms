export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const removeUser = () => {
  return localStorage.removeItem('user')
}
