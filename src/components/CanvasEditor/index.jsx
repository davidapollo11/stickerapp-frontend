import React, { useEffect, useRef, useState } from "react"
import { Canvas, FabricImage, util, Rect } from "fabric"

import "./style.css"

function CanvasEditor() {
    const canvasRef = useRef(null)
    const [canvas, setCanvas] = useState()
    const imageUrl = localStorage.getItem("uploadedImage")

    useEffect(() => {
        if (canvas || !canvasRef.current) return

        const initCanvas = new Canvas(canvasRef.current, {
            width: 500,
            height: 500,
        })
        
        initCanvas.backgroundColor = "#fff"
        initCanvas.renderAll()

        setCanvas(initCanvas)

        return () => {
            initCanvas.dispose()
        }
    }, [])

    useEffect(() => {
        if (canvas) {
            util.loadImage(imageUrl, { crossOrigin: 'anonymous' })
            .then((imgElement) => {
                const fabricImg = new FabricImage(imgElement, {
                left: 100,
                top: 100
                })
                fabricImg.scaleToWidth(300)
    
                fabricImg.set({ left: 50, top: 50 })
                canvas.add(fabricImg)
                canvas.renderAll()
            })
            .catch((error) => {
                console.error('Erro ao carregar a imagem:', error)
            })  
        }        
    }, [canvas])
    

    return (
        <div className="canvas-container">
            <canvas id="canvas" ref={canvasRef} />
        </div>
    )
}

export default CanvasEditor