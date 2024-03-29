import { ref } from '@vue/reactivity'
import { projectAuth } from '../firebase/config'

// refs
const error = ref(null)
// const isPending = false

// logout function
const logout = async () => {
  error.value = null
  // isPending.value = true

  try {
    await projectAuth.signOut()
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    // isPending.value = false
  }
}

const useLogout = () => {
  return { logout }
  // return { error, logout, isPending }
}

export default useLogout