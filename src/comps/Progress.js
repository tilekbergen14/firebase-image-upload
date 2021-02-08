import React, { useEffect } from 'react'
import ImageUpload from '../hooks/fileUpload'

export default function Progress({file, setFile}) {
    const {url, progress} = ImageUpload(file);
    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])
    return (
        <div className="progress-bar" style={{width: progress + "%"}}></div>
    )
}
