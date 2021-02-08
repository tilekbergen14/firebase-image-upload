import React, { useState } from 'react'
import Progress from './Progress'

export default function UploadForm() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const imageUpload = (e) => {
        const selected = e.target.files[0]
        console.log(selected.lastModified)
        const types = ['image/png', 'image/jpeg', 'image/jpg']
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError(null)
        }
        else {
            setFile(null)
            setError("Please select only images (jpg, jpeg, png)")
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={imageUpload} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className='error'>{error && error}</div>}
                {file && <div>{file && file.name}</div>}
                {file && <Progress file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
