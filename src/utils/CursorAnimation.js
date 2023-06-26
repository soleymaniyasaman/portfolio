import { useEffect } from "react";
import "./CursorAnimation.css";

const CursorAnimation = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const toAppend = document.getElementsByClassName("loader-container")[0];
            const all = document.getElementsByClassName("loader-container");

            const parentDiv = document.createElement("div");
            parentDiv.className = "loader-container";
            const innerDiv = document.createElement("div");
            innerDiv.className = "loader";
            parentDiv.appendChild(innerDiv);
            const d = document.body.appendChild(parentDiv);

            parentDiv.style.left = e.clientX - 50 + "px";
            parentDiv.style.top = e.clientY - 50 + "px";

            if (document.getElementsByClassName("loader-container").length > 50) {
                document.body.removeChild(toAppend);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
};

export default CursorAnimation;
