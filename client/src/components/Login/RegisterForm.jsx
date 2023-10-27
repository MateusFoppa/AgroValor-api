import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function RegisterForm() {
  const { name, email, password, setName, setEmail, setPassword, submitRegister } = useContext(UserContext)



  return (
    <form onSubmit={submitRegister} className="flex flex-col gap-4 px-8 py-2 text-white font-sans">
      <Logo></Logo>
      <div>
        <div className="mb-2 block">
          <label htmlFor="name1">
            Nome:
          </label>
        </div>
        <input
          className='p-2 rounded-md text-slate-900 md:w-72'
          id="email1"
          placeholder="Seu nome"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
        <input
          className='p-2 rounded-md text-slate-900 md:w-72'
          id="password1"
          placeholder="Sua senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className='bg-teal-400 p-2 rounded-md hover:bg-teal-500 mt-2 opacity-75 font-bold'>
        <span className="text-xl">
          Cadastrar-se
        </span>
      </button>
      <div className="flex justify-end">
        <Link to={'/session'} className='text-teal-200 hover:text-teal-300'>
          <span className="text-lg">
            Entrar
          </span>
        </Link>
      </div>
    </form>
  )
}
