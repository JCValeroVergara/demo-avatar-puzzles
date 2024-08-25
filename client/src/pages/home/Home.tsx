import { Navbar } from "../../components";
import BGImage from "../../assets/home/world00_Lobby.png";
import { Greetting } from "../../layouts";



export const Home = () => {
    const showText = 'Bienvenido a esta demo de nuestra plataforma de juegos educativos.';
    
    return (
        <div className="portrait:hidden">
            <div className="flex flex-col w-full h-screen">
                <div className="w-full h-[6vh] flex flex-row items-center justify-center">
                    <Navbar />
                </div>
                <div className="mt-[1vh] w-full h-[94vh] flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `url(${BGImage})`,
                    backgroundSize: '100% 95vh',
                    backgroundRepeat: 'no-repeat',
                }}
                >
                    <div className="w-[100vw] h-[25vh] mb-[2vh] px-[3vw] fixed bottom-0">
                        <Greetting
                            showText={showText}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
