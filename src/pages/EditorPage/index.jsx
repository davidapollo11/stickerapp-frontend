import { useLocation } from "react-router-dom"

import ToolBar from "../../components/ToolBar"
import CanvasEditor from "../../components/CanvasEditor"

import "./style.css"

function EditorPage() {
    

    return (
        <div>
            <h2>Edite a figurinha</h2>
            <div className="editor-container">
                <ToolBar />
                <CanvasEditor  />
            </div>


            {/* {image ?
                <img src={image} alt="Imagem selecionada" style={{ maxWidth: "100%" }} /> :
                <p>Nenhuma imagem carregada</p>
            } */}
        </div>
    )
}

export default EditorPage