import React from "react"

import { FiSave, FiEdit2, FiType, FiTrash2, FiCrop } from "react-icons/fi"

import "./style.css"

function ToolBar() {
    return (
        <div className="toolbar">
            <div className="tools">
                <button><FiType /></button>
                <button><FiEdit2 /></button>
                <button><FiCrop /></button>
                <button><FiTrash2 /></button>
            </div>
            <button><FiSave className="symbol"/>Salvar</button>
        </div>
    )
}

export default ToolBar