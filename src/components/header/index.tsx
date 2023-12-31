const Header = () => {
    return (
        <header className="w-full mt-0 text-black bg-[#e4e4de] body-font">
            <div className="flex flex-col items-start p-4 mx-auto md:flex-row">
                <a className="flex items-center mb-0 font-medium text-gray-900 title-font">
                    <img width={80} src={'/images/smart-box-office-logo-002@2x.png'} alt={''} />
                </a>
                {/*<nav className="flex items-center justify-center text-base md:ml-auto">*/}
                {/*    <span className="mr-5 hover:text-gray-900">Talent_ &nbsp; Amir Khan</span>*/}
                {/*    /!*<a href="#_" className="hover:text-gray-900">Contact</a>*!/*/}
                {/*</nav>*/}
            </div>
        </header>
    );
}

export default Header;