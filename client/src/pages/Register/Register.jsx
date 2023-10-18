import { RegisterForm } from '../../components/Login/RegisterForm';
import { UserProvider } from '../../components/contexts/UserContext';

export default function Register(){

  return (
    <div className='flex items-center justify-center h-screen bg-slate-500'>
      <div className='bg-slate-800 p-4 rounded-md'>
        <UserProvider>
          <RegisterForm></RegisterForm>
        </UserProvider>
    </div>
    </div>
  )
}
