import { useState } from "react";
import Api from "../services/api";
import {Link, useNavigate } from "react-router-dom";
import { setAccessToken } from "../auth/token";


const Signin =() =>{
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"",
        password:""
    });
    const [error,setError] = useState("");

    const formHandler = (e) => {
        console.log(e.target.name);
            setFormData({
                ...formData,
                [e.target.name]:e.target.value
            })
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();
         try {
            const res = await Api.post("/auth/login", formData);
            // console.log(res.data); return;
            const token = await res.data.data.token;
            
            // console.log("Received token:", token);
            // SAVE TOKEN IN MEMORY
            setAccessToken(token);
            navigate("/");
            // console.log("Signup Success:", res.data);
        } catch (err) {
            const message =  err?.response?.data?.message || err?.message ||
            "Something went wrong";

            setError(message);
            console.log("Signup Error:", message);
            // setError(err.response.errors?.data.errors?.message || "Something went wrong");
        } finally {
            // setLoading(false);
        }
    }

    return <>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
            <div className="w-[90%] max-w-md bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl p-8 text-slate-100">
                <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-10 w-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    S
                </div>
                <div>
                    <h1 className="text-xl font-bold leading-tight">School SaaS</h1>
                    <p className="text-xs text-slate-400">Smart School Management</p>
                </div>
                </div>

                <h2 className="text-2xl font-semibold mb-2 text-center">Welcome back</h2>
                <p className="text-xs text-slate-400 text-center mb-6">
                Login as <span className="font-semibold text-blue-400">Admin</span>, Teacher, Student or Parent
                </p>

                <p className="text-xs text-rose-500 text-center">{error}</p>
                <form className="space-y-4" onSubmit={(e) => {formSubmitHandler(e)}}>
                <div>
                    <label className="block text-xs font-medium mb-1">Email</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => {formHandler(e)}}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-medium">Password</label>
                    <a href="#" className="text-[11px] text-blue-400 hover:underline">Forgot?</a>
                    </div>
                    <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => {formHandler(e)}}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* <div>
                    <label className="block text-xs font-medium mb-1">Login As</label>
                    <select
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option>School Admin</option>
                    <option>Teacher</option>
                    <option>Student</option>
                    <option>Parent</option>
                    </select>
                </div> */}

                <button
                    className="w-full mt-2 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-sm font-semibold transition flex items-center justify-center gap-2 active:shadow-sm transition duration-150 ease-in-out"
                >
                    Login to Dashboard
                </button>
                </form>

                <p className="mt-5 text-[11px] text-center text-slate-400">
                New user?
                {/* <a href="/signup" className="text-blue-400 font-semibold hover:underline">Create an account</a> */}
                <Link  to="/signup" className="text-blue-400 font-semibold hover:underline">Create an account</Link>
                </p>
            </div>
        </div>
    </>
    
}

export default Signin;