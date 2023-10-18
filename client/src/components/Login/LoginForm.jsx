import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function LoginForm() {
  const {email, password, setEmail, setPassword, submitLogin} = useContext(UserContext)
  return (
<form onSubmit={submitLogin} className="flex max-w-md flex-col gap-4 w-full px-10 py-2 text-white">
        <Logo></Logo>
      <div>
        <div className="mb-2 block">
          <label htmlFor="email1">
              Email:
          </label>
        </div>
        <input
          className='p-2 rounded-md text-slate-900'
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
          className='p-2 rounded-md text-slate-900'
          id="password1"
          placeholder="Sua senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className='bg-teal-400 p-2 rounded-md hover:bg-teal-500 mt-2'>
        Entrar
      </button>
      <div className="flex justify-end">
      <Link to={'/register'} className='text-teal-200 hover:text-teal-300'>
        Registrar-se
      </Link>
      </div>
    </form>
  )
}
