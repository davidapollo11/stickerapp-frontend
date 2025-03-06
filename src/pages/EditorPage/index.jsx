import { useState } from "react"

import ToolBar from "../../components/ToolBar"
import CanvasEditor from "../../components/CanvasEditor"

import "./style.css"

function EditorPage() {
    const [canvas, setCanvas] = useState(null)
    const [isDrawing, setIsDrawing] = useState(false)
    
    return (
        <div>
            <h2>Edite a figurinha</h2>
            <div className="editor-container">
                <ToolBar canvas={canvas} setIsDrawing={setIsDrawing} />
                <CanvasEditor setCanvas={setCanvas} isDrawing={isDrawing} />
            </div>


            {/* {image ?
                <img src={image} alt="Imagem selecionada" style={{ maxWidth: "100%" }} /> :
                <p>Nenhuma imagem carregada</p>
            } */}
        </div>
    )
}

export default EditorPage