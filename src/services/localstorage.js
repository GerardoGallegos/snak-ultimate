export const loadFromStorage = (value) => {
  if (!value) {
    return console.error('You need define the value in params')
  }
  try {
    const key = window.localStorage.getItem(value)
    if (key === null) {
      return {}
    }
    return JSON.parse(key)
  } catch (err) {
    return {}
  }
}

export const saveInStorage = (state, value) => {
  try {
    const key = JSON.stringify(state)
    window.localStorage.setItem(value, key)
  } catch (err) {
    // ignore errors
  }
}
