
const Header = () => {
    return (
        <div className="bg-[#1C2B35] py-5 text-white">
            <nav className="flex items-center container mx-auto justify-between">
                <h1 className="font-bold  text-3xl">BottleBazaar</h1>
                <div className="flex gap-5 font-medium ">
                    <a className="hover:text-orange-400" href="">Home</a>
                    <a className="hover:text-orange-400" href="">About</a>
                    <a className="hover:text-orange-400" href="">Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;