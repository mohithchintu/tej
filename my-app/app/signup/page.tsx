'use client'
import React from "react";
import signUp from "../auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        console.log(result)
        return router.push("/dashboard")
    }
    return (<div className="wrapper">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
  <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
  <form onSubmit={handleForm} className="w-full max-w-md space-y-4">
    <div className="flex flex-col">
      <label  className="text-sm font-medium mb-2">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        name="email"
        id="email"
        placeholder="example@mail.com"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="flex flex-col">
      <label  className="text-sm font-medium mb-2">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        name="password"
        id="password"
        placeholder="password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">  Sign Up
    </button>
  </form>
</div>

    </div>);
}

export default Page;