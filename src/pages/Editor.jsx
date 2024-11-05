// src/pages/Editor.js
import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Editor = () => {
  const location = useLocation();
  const { width, height } = location.state || { width: 800, height: 600 }; // Default dimensions
  const canvasRef = useRef(null);

  // Track whether the user is currently drawing
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      setCtx(context);
      // Set default properties like line color and width
      context.strokeStyle = '#000000';
      context.lineWidth = 2;
    }
  }, [width, height]);

  // Mouse down to start drawing
  const startDrawing = (e) => {
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  // Draw on the canvas when the mouse moves
  const draw = (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  // Stop drawing on mouse up or mouse leave
  const stopDrawing = () => {
    ctx.closePath();
    setIsDrawing(false);
  };

  return (
    <div className="bg-gray-300 min-h-[90vh] p-6 flex items-center justify-center">
      <div className="flex flex-col">
        <div className="border border-gray-300 shadow-lg" style={{ width, height }}>
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            className="bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
