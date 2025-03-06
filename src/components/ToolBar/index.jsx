import React, { useState } from "react"
import { Textbox } from "fabric"

import { FiSave, FiEdit2, FiType, FiTrash2, FiCrop } from "react-icons/fi"

import "./style.css"

function ToolBar({ canvas, setIsDrawing }) {
    const addText = () => {
        if (!canvas) return
        const text = new Textbox("Digite aqui", {
            left: 250,
            top: 100,
            fontSize: 46,
            fill: "black",
            fontFamily: "Impact",
            textAlign: "center",
        })

        canvas.add(text)
        canvas.renderAll()
    }

    const toggleDrawingMode = () => {
        setIsDrawing((prev) => !prev)
    }
    return (
        <div className="toolbar">
            <div className="tools">
                <button onClick={addText}><FiType /></button>
                <button onClick={toggleDrawingMode}><FiEdit2 /></button>
                <button className="button-trash"><FiTrash2 /></button>
            </div>
            <button><FiSave className="symbol"/>Salvar</button>
        </div>
    )
}

export default ToolBar