import { Navbar } from "../../components";

export const Home = () => {
    return (
        <div className="portrait:hidden">
            <div className="flex flex-col w-full h-screen">
                <div className="w-full h-[7vh] flex flex-row items-center justify-center">
                    <Navbar />
                </div>
                <div className="mt-[1vh] w-full h-[94vh] flex flex-col justify-center items-center">
                    <h1 className="text-[4vh]">Welcome to the Home Page</h1>
                </div>
            </div>
        </div>
    );
};
