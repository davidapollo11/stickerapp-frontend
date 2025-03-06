import React, { useEffect, useRef, useState } from "react"
import { Canvas, FabricImage, util, PencilBrush } from "fabric"

import "./style.css"

function CanvasEditor({ setCanvas, isDrawing }) {
    const canvasRef = useRef(null)
    const [fabricCanvas, setFabricCanvas] = useState(null)
    const [imageLoaded, setImageLoaded] = useState(false)
    const imageUrl = localStorage.getItem("uploadedImage")

    useEffect(() => {
        if (canvasRef.current && !fabricCanvas) {
            const initCanvas = new Canvas(canvasRef.current, {
                width: 500,
                height: 500,
            })

            initCanvas.backgroundColor = "#fff"
            initCanvas.renderAll()

            setFabricCanvas(initCanvas)
            setCanvas(initCanvas)

            return () => {
                initCanvas.dispose()
            }
        }
    }, [setCanvas])  

    useEffect(() => {
        if (fabricCanvas && imageUrl && !imageLoaded) {
            util.loadImage(imageUrl, { crossOrigin: 'anonymous' })
                .then((imgElement) => {
                    const fabricImg = new FabricImage(imgElement, {
                        left: 100,
                        top: 100
                    })
                    fabricImg.scaleToWidth(300)
                    fabricImg.set({ left: 50, top: 50 })

                    fabricCanvas.add(fabricImg)
                    fabricCanvas.renderAll()
                    setImageLoaded(true)
                }).catch((error) => {
                console.error('Erro ao carregar a imagem: ', error)
            })
        }
    }, [fabricCanvas, imageUrl])
    
    useEffect(() => {
        if (fabricCanvas) {
            if (isDrawing) {
                fabricCanvas.isDrawingMode = true;
                
                if (!fabricCanvas.freeDrawingBrush) {
                    fabricCanvas.freeDrawingBrush = new PencilBrush(fabricCanvas);
                }
                
                fabricCanvas.freeDrawingBrush.color = "black";
                fabricCanvas.freeDrawingBrush.width = 5;
            } else {
                fabricCanvas.isDrawingMode = false;
            }
        }
    }, [fabricCanvas, isDrawing]);
    return (
        <div className="canvas-container">
            <canvas id="canvas" ref={canvasRef} />
        </div>
    )
}

export default CanvasEditor