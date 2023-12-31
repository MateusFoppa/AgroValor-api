import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
export function LoginForm() {
  const { email, password, setEmail, setPassword, submitLogin } = useContext(UserContext)
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form onSubmit={submitLogin} className="flex max-w-md flex-col gap-4 w-full px-6 py-2 text-white">
      <Logo></Logo>
      <div>
        <div className="mb-2 block">
          <label htmlFor="email1">
            Email:
          </label>
        </div>
        <input
          className='p-2 rounded-md text-slate-900 md:w-72'
          id="email1"
          placeholder="name@email.com"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div>
          <label
            htmlFor="password1"
          >Senha:</label>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className='p-2 rounded-md text-slate-900 md:w-72'
            id="password1"
            placeholder="Sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoIosEyeOff className="w-6 h-6 text-gray-500" />
            ) : (
              <IoIosEye className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>
      </div>
      <button type="submit" className='bg-teal-400 p-2 rounded-md hover:bg-teal-500 mt-2 opacity-75 font-medium'>
        <span className="text-xl">
          Entrar
        </span>
      </button>
      <div className="flex justify-end">
        <Link to={'/register'} className='text-teal-200 hover:text-teal-300'>
          <span className="text-lg">
            Registrar-se
          </span>
        </Link>
      </div>
    </form >
  )
}
