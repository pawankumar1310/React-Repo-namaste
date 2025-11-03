const Contact = () => {
    return (
        <>
            <div >
                <h1 className="font-bold text-3xl m-2 p-2"> Contact Us</h1>
                <form>
                    <input type="text" placeholder="Name" className="border border-black m-2 p-2"></input>
                    <input type="text" placeholder="Message" className="border border-black m-2 p-2"></input>
                    <button className="border border-black rounded-lg m-2 p-2 cursor-pointer">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Contact;