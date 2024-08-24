import { Route, Routes } from "react-router-dom";
import { AvatarDemo, Home, Puzzle_01, Puzzle_02 } from "./pages";


export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/puzzle-demo-01" element={<Puzzle_01 />} />
                <Route path="/puzzle-demo-02" element={<Puzzle_02 />} />
                <Route path="/avatar-demo" element={<AvatarDemo />} />
            </Routes>
        </div>
    );
}
