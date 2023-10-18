import { LoginForm } from '../../components/Login/LoginForm';
import { UserProvider } from '../../components/contexts/UserContext';

export default function Login(){

  return (
    <div className='flex items-center justify-center h-screen bg-slate-500'>
      <div className='bg-slate-800 p-4 rounded-md'>
        <UserProvider>
          <LoginForm></LoginForm>
        </UserProvider>
    </div>
    </div>
  )
}
