
import { useEffect, useState } from "react";
const Lists = ({data,handler,randomString}) => {
    
    const [formData,setFormData] = useState({
        user:""
    });

    const onchangeFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
        console.log(formData);
    }

    

    return <>
          
            <form className="max-w-sm mx-auto" onSubmit={(e) => {
                e.preventDefault();
                handler(e)
            }}>
                    <div className="mb-5">
                        <input type="text" id="user" 
                        name="user" 
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                        placeholder="name@flowbite.com"
                        value={data.name}
                        onChange={(e) => {onchangeFormData(e)}}
                        required />
                    </div>
                    <button type="submit" className="text-blue bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
            </form>

            <button className="bg-gray-400 h-15 rounded py-3 px-3 text-2l" onClick={randomString}>CLICK HERE </button>

            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <h1>{data.name}</h1>
            </div>



    </>
}

export default Lists;