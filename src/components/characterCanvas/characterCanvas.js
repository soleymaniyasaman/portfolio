import React, { useEffect, useRef } from 'react';
import './characterCanvas.css';

const CharacterCanvas = () => {
    const canvasRef = useRef(null);
    const characters = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = 500;
        canvas.height = 500;

        const characterList = ['r', 'e', 'a', 'c', 't', 'c', 's', 's', 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', 'h', 't', 'm', 'l', 'r', 'e', 'a', 'c', 't'];
        const layers = {
            n: 5,
            letters: [100, 40, 30, 20, 10],
            coef: [0.1, 0.2, 0.4, 0.6, 0.8],
            size: [16, 22, 36, 40, 46],
            color: ['#fff', '#eee', '#ccc', '#bbb', '#aaa'],
            font: 'Courier',
        };

        function drawLetter(char) {
            ctx.font = `${char.size}px ${char.font}`;
            ctx.fillStyle = char.color;

            const x = char.posX + (mouseX - canvas.width / 2) * char.coef;
            const y = char.posY + (mouseY - canvas.height / 2) * char.coef;

            ctx.fillText(char.char, x, y);
        }

        function clear() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function render() {
            clear();
            for (let i = 0; i < characters.length; i++) {
                drawLetter(characters[i]);
            }
        }

        function createLetters() {
            for (let i = 0; i < layers.n; i++) {
                for (let j = 0; j < layers.letters[i]; j++) {
                    const character = characterList[Math.floor(Math.random() * characterList.length)];
                    const x = Math.floor(Math.random() * canvas.width);
                    const y = Math.floor(Math.random() * canvas.height);

                    characters.push({
                        char: character,
                        font: layers.font,
                        size: layers.size[i],
                        color: layers.color[i],
                        layer: i,
                        coef: layers.coef[i],
                        posX: x,
                        posY: y,
                    });
                }
            }
        }

        createLetters();
        update();

        function update() {
            render();
            requestAnimationFrame(update);
        }

        function handleMouseMove(ev) {
            mouseX = ev.pageX - canvas.offsetLeft;
            mouseY = ev.pageY - canvas.offsetTop;
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="absolute-center">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default CharacterCanvas;
