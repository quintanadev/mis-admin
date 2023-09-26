"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function Home() {
  const router = useRouter()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('user', user)
    formData.append('password', password)
    alert(`Bem Vindo ${user}!`)
    router.push('/home')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-purple-900">
      <div className="flex flex-col justify-center items-center w-full max-w-sm mx-4 p-4 bg-gray-900 rounded">
        
        <Image
          src="/images/logos/logo.svg"
          width={210}
          height={67}
          alt=""
          className="my-4"
        />

        <p className="text-sm text-center text-gray-300 my-4 px-8">
          Enter your email address and password to access admin panel
        </p>

        <form className="w-full max-w-xs" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Usuário"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight"
              onChange={(event) => setUser(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="******************"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button className="bg-violet-900 hover:bg-violet-700 text-gray-300 font-bold py-2 px-4 rounded" type="submit">
              Log In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-violet-400 hover:text-violet-800" href="#">
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}