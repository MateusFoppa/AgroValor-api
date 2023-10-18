import logoAgrovalor from "../../assets/agricultura.png"

export function Logo() {
  return (
    <div className="flex text-teal-800 font-bold text-2xl">
      <img className="w-8 h-8" src={logoAgrovalor} alt="" />
      <h1 className="mx-1">AGROVALOR</h1>
    </div>
  )
}
