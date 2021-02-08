import { useState, useEffect } from 'react'
import { firebaseStorage } from '../firebase/config'

const ImageUpload = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = firebaseStorage.ref(file.lastModified+file.name)

        storageRef.put(file).on('state_changed', (snap) => {
            setProgress((snap.bytesTransferred / snap.totalBytes) * 100)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            setUrl(url)
        })
    }, [file])

    return {progress, error, url}
}

export default ImageUpload
