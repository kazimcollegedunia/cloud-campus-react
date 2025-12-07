import { useState } from "react";



const Normal = () => {

    const [formData,SetFormData] = useState({
        name:"",
        email:""
    });

    const formHandler = (e) => {
        SetFormData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }

    const formDatahandler = (e) => {
        e.preventDefault();
        SetFormData({
            name:"",
            email:"",
        })
    }

    return <div className="bg-stone-400 h-60 w-110 m-auto py-3 px-3">
        <h1 className="text-center content-center justify-around bg-rose-400 rounded-2xl text-2xl text-gray-200">Sign here</h1>
       <form onSubmit={(e) => {
            formDatahandler(e)
       }}>
             <input type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={(e) => {formHandler(e)}}
                className="bg-amber-200 w-full h-10 px-2 py-2 rounded-2xl mt-2 text-zinc"
                />

                <input type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={(e) => {formHandler(e)}}
                className="bg-amber-200 w-full h-10 px-2 py-2 rounded-2xl mt-2 text-zinc"
                />
                <button className="bg-amber-600 w-full h-10 px-2 py-2 rounded-2xl mt-2 text-zinc active:not-xl:">Submit</button>
       </form>


    </div>
}

export default Normal;