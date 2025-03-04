import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiUpload } from "react-icons/fi"

function ImageUploader() {
    const fileInputRef = useRef(null)
    const navigate = useNavigate()

    const handleButtonClick = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                localStorage.setItem("uploadedImage", e.target.result)
                navigate("/edit")
            }

            reader.readAsDataURL(file)
        }
    }
    
    return (
        <>
            <input
                type="file"
                name="arquivos"
                className="btn btn-success"
                style={{ display: "none" }}
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
            />

            <button onClick={handleButtonClick} type="button"><FiUpload className="symbol"/>Carregar imagem</button>
        </>
    )
}

export default ImageUploader