import { useContext, useState } from "react";
import { updateUserProfile } from "../../services/api";
import { PropertyContext } from "../contexts/PropertyContext";

import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

export default function UpdatePropertyModal(data) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [isModalUpdateOpen, setUpdateModalOpen] = useState(false);
  const [isPasswordSectionOpen, setPasswordSectionOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { setUpdate } = useContext(PropertyContext);

  function openUpdateModal(data) {
    setName(data.value.name);
    setEmail(data.value.email);
    setUpdateModalOpen(true);
  }

  function closeUpdateModal() {
    setUpdateModalOpen(false);
  }

  const handlerUpdate = async () => {
    console.log(name, avatar, email, password, passwordConfirmation, oldPassword)
    setUpdateModalOpen(false);

    if (password && passwordConfirmation && oldPassword) {
      const passwordUpdateRequest = await updateUserProfile(name, avatar, email, password, passwordConfirmation, oldPassword)
      console.log({ passwordUpdateRequest });
      setUpdate(passwordUpdateRequest);

    } else {
      const PropertyRequest = await updateUserProfile(name, avatar, email)
      console.log({ PropertyRequest })
      setUpdate(PropertyRequest);
    }

  }

  return (
    <div className="flex items-center justify-center">
      <button type="button" onClick={() => { openUpdateModal(data) }} data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className="flex w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
        <svg className="w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
      </button>
      {isModalUpdateOpen && (
        <div id="updateProductModal" tabIndex="-1" aria-hidden="true" className="flex bg-slate-800 bg-opacity-75 h-screen overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-screen mx-auto  md:inset-0 max-h-full">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Atualizar</h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeUpdateModal} data-modal-toggle="updateProductModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome do Proprietário</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nome"></input>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Email"></input>
                  </div>
                  <div>
                    <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar URL</label>
                    <input type="text" name="avatar" id="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Avatar URL"></input>
                  </div>
                </div>
                <div className="mb-4">
                  <button
                    type="button"
                    className="w-full p-2 text-teal-600 hover:text-teal-300 rounded-md mb-2 text-lg text-right"
                    onClick={() => setPasswordSectionOpen(!isPasswordSectionOpen)}
                  >
                    Alterar Senha
                  </button>
                  {isPasswordSectionOpen && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nova Senha</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Nova Senha"
                          ></input>
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
                      <div>
                        <label htmlFor="passwordConfirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Senha</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="passwordConfirmation"
                            id="passwordConfirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Confirmar Senha"
                          ></input>
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
                      <div>
                        <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha Antiga</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="oldPassword"
                            id="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Senha Antiga"
                          ></input>
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
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <button type="button" onClick={handlerUpdate} className="text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
