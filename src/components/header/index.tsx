const Header = () => {
    return (
        <header className="w-full mt-4 text-white bg-black shadow-sm body-font">
            <div className="flex flex-col items-start p-4 mx-auto md:flex-row">
                <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    <img width={80} src={'/images/logo.png'} alt={''} />
                </a>
                {/*<nav className="flex items-center justify-center text-base md:ml-auto">*/}
                {/*    <a href="#_" className="mr-5 hover:text-gray-900">Home</a>*/}
                {/*    <a href="#_" className="mr-5 hover:text-gray-900">About</a>*/}
                {/*    <a href="#_" className="hover:text-gray-900">Contact</a>*/}
                {/*</nav>*/}
            </div>
        </header>
    );
}

export default Header;