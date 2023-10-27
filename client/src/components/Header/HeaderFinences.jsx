import { Link } from "react-router-dom";

export default function HeaderFinance() {
  return (
    <div className="flex  bg-slate-800 h-16 justify-center items-center gap-9
         text-white font-bold ">
      <button>
        <Link to={'/production'} className="hover:bg-slate-600 px-4 py-2 rounded-md font-semibold">
          Produção
        </Link>
      </button>
      <span>|</span>
      <button>
        <Link to={'/expense'} className="hover:bg-slate-600 px-4 py-2 rounded-md font-semibold">
          Despesas
        </Link>
      </button>
    </div>
  )
}
