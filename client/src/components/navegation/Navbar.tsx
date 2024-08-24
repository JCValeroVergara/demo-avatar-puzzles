import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-row items-center justify-center">
            <div className="w-full h-[7vh] flex justify-center items-center">
                <button 
                    className="w-[20vw] h-[6vh] flex items-center justify-center bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-[0.2vw] font-bold text-[3vh] py-[1vh] px-[2vw] rounded-[0.3vw] mx-[1vw]"
                    onClick={() => navigate("/puzzle-demo-01")} 
                >
                        Puzzle Demo 01
                </button>
                <button 
                    className="w-[20vw] h-[6vh] flex items-center justify-center bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-[0.2vw] font-bold text-[3vh] py-[1vh] px-[2vw] rounded-[0.3vw] mx-[1vw]"
                    onClick={() => navigate("/puzzle-demo-02")}
                >
                        Puzzle Demo 02
                </button>
                <button 
                    className="w-[20vw] h-[6vh] flex items-center justify-center bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-[0.2vw] font-bold text-[3vh] py-[1vh] px-[2vw] rounded-[0.3vw] mx-[1vw]"
                    onClick={() => navigate("/avatar-demo")}
                >
                        Avatar Demo
                </button>
                <button
                    className="w-[20vw] h-[6vh] flex items-center justify-center bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-[0.2vw] font-bold text-[3vh] py-[1vh] px-[2vw] rounded-[0.3vw] mx-[1vw]"
                    onClick={() => navigate("/")}
                >
                    Home
                </button>
            </div>
        </div>
    );
}