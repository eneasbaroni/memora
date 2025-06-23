import Image from "next/image";

const Header = () => {
    return (
        <header className="w-full h-16 shadow-xs flex flex-col items-center justify-center bg-bgColor/10 backdrop-blur-sm">
            <Image src="/Images/logo.svg" alt="logo" width={100} height={100} />
        </header>
    );
};
export default Header;
