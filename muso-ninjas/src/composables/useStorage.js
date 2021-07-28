import { projectStorage } from '../firebase/config'
import { ref } from '@vue/reactivity'
import { file } from '@babel/types'  // auto-added when file inserted

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
      url.value = res.ref.getDownloadURL() // gets public url for the image
    } catch (err) {
      console.log(err.message)
      error.value = err.message
      
    }
  }

  return { url, filePath, error, uploadImage }
}

export default useStorage