import logoAgrovalor from "../../assets/agricultura.png"

export function Logo() {
  return (
    <div className="flex text-teal-800 font-bold text-xl">
      <img className="w-6 h-7" src={logoAgrovalor} alt="" />
      <h1 className="mx-1">AGROVALOR</h1>
    </div>
  )
}
