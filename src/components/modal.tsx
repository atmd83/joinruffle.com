const Modal = ({open, setOpen, children, title}: any) => {

    return (
        <div onClick={() => setOpen(false)} className={`${open ? '' : 'hidden'} fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-4`}>
            <div className="max-h-full w-full max-w-[900px] overflow-y-auto rounded-2xl bg-white">
                <div className="w-full">
                    <div className="m-4 my-4 max-w-[900px] max-h-[800px] mx-auto">
                        <div className="p-4 m-4" >
                            {/*<h1 className="mb-4 text-3xl text-black font-extrabold">{title}</h1>*/}
                            {children}
                        </div>
                        <div className="space-y-4 pl-8 pr-8">
                            {/*<button className="p-3 bg-black rounded-full text-white w-full font-semibold">Allow*/}
                            {/*    notifications*/}
                            {/*</button>*/}
                            <button onClick={() => setOpen(false)} className="p-3 bg-black border rounded-full text-white w-full font-semibold">Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
