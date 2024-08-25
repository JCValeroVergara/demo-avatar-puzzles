import { Route, Routes } from "react-router-dom";
import { AvatarDemo, Home, Puzzle_01, Puzzle_02 } from "./pages";
import { useEffect, useState } from "react";

const requestFullScreen = () => {
    const element = document.documentElement as HTMLElement & {
        mozRequestFullScreen?: () => Promise<void>;
        webkitRequestFullscreen?: () => Promise<void>;
        msRequestFullscreen?: () => Promise<void>;
    };

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Older Firefox versions
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Older Chrome, Safari, and Opera versions
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Older IE/Edge versions
        element.msRequestFullscreen();
    }
}

// Función para detectar si el dispositivo es móvil
const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


export default function App() {
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const handleFullScreenClick = () => {
        if (isMobileDevice() && !document.fullscreenElement) {
            requestFullScreen();
        }
    }



    return (
        <div
            onClick={isMobileDevice() ? handleFullScreenClick : undefined}>
        {isPortrait && (
        <div
            className="fixed w-full h-full top-0 left-0 pt-[5vh] text-center text-white bg-primary"
            style={{ zIndex: 10000 }}
        >
            <p>
                Esta aplicación está diseñada para ser vista en orientación
                horizontal. Por favor, gire su dispositivo para disfrutar de la
                experiencia completa.
            </p>
        </div>
        )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/puzzle-demo-01" element={<Puzzle_01 />} />
                <Route path="/puzzle-demo-02" element={<Puzzle_02 />} />
                <Route path="/avatar-demo" element={<AvatarDemo />} />
            </Routes>
        </div>
    );
}
