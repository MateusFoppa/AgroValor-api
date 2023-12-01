import { RegisterForm } from '../../components/Login/RegisterForm';

export default function Register() {

  return (
    <div className='flex bg-teal-800 bg-opacity-40 h-screen overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-screen mx-auto  md:inset-0 max-h-full'>
      <div className='bg-slate-800 opacity-90 p-6 rounded-md'>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  )
}
