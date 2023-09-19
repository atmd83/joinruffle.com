
const Tabs = ({active = 0, changeActiveTab, children}: any) => {
    const activeClass = "cursor-pointer font-light inline-block p-4 pb-0 border-b-2 border-[#A4D5A9] rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
    const inactiveClass = "cursor-pointer font-light inline-block p-4 pb-0 border-b-2 border-white md:border-black rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
    return (
        <div
            className="rounded-b-lg bg-[#fff] md:bg-black w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2 text-black md:text-white">
                    <a onClick={() => changeActiveTab(0)} className={active === 0 ? activeClass : inactiveClass}>Tickets</a>
                </li>
                {/*<li className="mr-2 text-black md:text-white">*/}
                {/*    <a onClick={() => changeActiveTab(1)} className={active === 1 ? activeClass : inactiveClass}>Events</a>*/}
                {/*</li>*/}
                {/*<li className="mr-2 text-black md:text-white">*/}
                {/*    <a onClick={() => changeActiveTab(2)} className={active === 2 ? activeClass : inactiveClass}>Gallery</a>*/}
                {/*</li>*/}
                {/*<li className="mr-2 text-black md:text-white">*/}
                {/*    <a onClick={() => changeActiveTab(3)} className={active === 3 ? activeClass : inactiveClass}>Training Schedule</a>*/}
                {/*</li>*/}
            </ul>

            {children[active]}
        </div>
    );
}

export default Tabs;