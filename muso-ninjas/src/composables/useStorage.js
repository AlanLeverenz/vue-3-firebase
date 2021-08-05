import { projectStorage } from '../firebase/config'
import { ref } from '@vue/reactivity'
import { file } from '@babel/types'  // auto-added when file inserted
import getUser from './getUser'

const { user } = getUser() // from composable

const useStorage = () => {
  const error = ref()
  const url = ref(null) // to access image from frontend
  const filePath = ref(null) // path to image in filebaseStorage

  // function to upload image
  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`
    const storageRef = projectStorage.ref(filePath.value)

    try {
      const res = await storageRef.put(file) // put function saves the image in fb
      url.value = await res.ref.getDownloadURL() // gets public url for the image
    } catch (err) {
      console.log(err.message)
      error.value = err.message
      
    }
  }

  const deleteImage = async (path) => {
    // getting a reference to the path of the file in Firebase
    const storageRef = projectStorage.ref(path)
    try {
      await storageRef.delete()
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    }
  }

  return { url, filePath, error, uploadImage, deleteImage }
}

export default useStorage