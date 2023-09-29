import Modal from "./modal";
import {useState} from "react";
import {useFormspark} from "@formspark/use-formspark";

const Buttons = ({mobile = false}: any) => {
    const [openTravel, setOpenTravel] = useState(false);
    const [openVIP, setOpenVIP] = useState(false);
    const [submitted, setSubmitted] = useState(false)

    const [submit, submitting] = useFormspark({
        formId: 'orUScMWb',
    });

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [require_accommodation, setRequireAccommodation] = useState(false);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        await submit({
            name,
            number,
            email,
            location,
            numberOfPeople,
            require_accommodation
        });

        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
        }, 4000)
        setOpenTravel(false)

    };


    if(submitted){
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    }

    return (
        <>
            <aside className={`${mobile ? 'block md:hidden relative rounded-lg mt-4 p-4 bg-black' : 'hidden md:block absolute'}`} style={{
                bottom: mobile ? '0' : '4rem',
                left: mobile ? '0' : '2rem',
                width: mobile ? '100%' : '30%'
            }}>
                <a href={'https://www.wtm360.co.uk/amir-khan-1695128410-amir-khan-live-tour-podcast-with-steve-bunce.html'} target={'_blank'}>
                    <button className="w-full mb-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
                        <img className={'mr-4'}  width={'25'} src={'/images/seats.png'} alt={''} />
                        Book best seats
                    </button>
                </a>

                <a href={'https://lounges.tv/lounge/details/4pCnx1fq2C'} target={'_blank'}>
                    <button className="w-full mb-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
                        <img className={'mr-4'}  width={'25'} src={'/images/watch.png'} alt={''} />
                        Watch online
                    </button>
                </a>

                <button onClick={() => setOpenTravel(true)} className="w-full mb-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
                    <img className={'mr-4'}  width={'25'} src={'/images/seats.png'} alt={''} />
                    Travel together
                </button>

                <button onClick={() => setOpenVIP(true)} className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
                    <img className={'mr-4'}  width={'25'} src={'/images/win.png'} alt={''} />
                    Win VIP experience
                </button>
            </aside>


            <Modal open={openTravel} setOpen={setOpenTravel} title={"Travel Together"}>
                <section className={"text-black text-left"}>
                    <form onSubmit={onSubmit}>

                        <div className="mb-2">
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Name"
                                   onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Number"
                                   onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <input type="email"
                                   className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Email"
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Collection Location"
                                   onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="No: of people traveling"
                                   onChange={(e) => setNumberOfPeople(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <p className={'mb-2'}><strong>Require Accommodation?</strong></p>
                            <div className="flex items-center mb-4">
                                <input id="country-option-1" type="radio" name="accommodation" value="USA"
                                       className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                       onChange={(evt) => setRequireAccommodation(evt.target.checked)}
                                />
                                <label htmlFor="country-option-1"
                                       className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Yes
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input id="country-option-2" type="radio" name="accommodation" value="Germany"
                                       checked className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                       onChange={(evt) => setRequireAccommodation(!evt.target.checked)}
                                />
                                <label htmlFor="country-option-2"
                                       className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    No
                                </label>
                            </div>

                        </div>


                        {/*<textarea value={message} onChange={(e) => setMessage(e.target.value)} />*/}
                        <button type="submit" disabled={submitting} className="mb-4 bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded inline-flex items-center">
                            Send
                        </button>
                    </form>
                </section>
            </Modal>

            <Modal open={openVIP} setOpen={setOpenVIP}>
                    <script defer
                            src='https://eocampaign1.com/form/58036e8e-5ba2-11ee-a1a7-91d7cae36534.js'
                            data-form="58036e8e-5ba2-11ee-a1a7-91d7cae36534">
                    </script>
            </Modal>

            {(submitted) && (
                <div id="toast-default"
                     style={{top: '2rem', right: '2rem'}}
                     className="flex fixed items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                     role="alert">
                    <div className="ml-0 text-black text-sm font-normal">Thanks. We will be in touch</div>
                </div>
            )}
        </>
    );
}

export default Buttons;