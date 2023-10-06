import axios from 'axios';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    console.log('Email:', email);
    console.log('Password:', password);


    if (!email || !password) {
      console.error('Por favor, completa todos los campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/sessions', {
        email,
        password,
      });
      console.log('Server response:', response.data);
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-gray-200 p-4 border-rounded'>
    <form className="flex max-w-md flex-col gap-4 w-200 p-8">
        <h1>Entrar</h1>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"

          />
        </div>
        <TextInput
          id="email1"
          placeholder="name@email.com"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button type="button" className='bg-green-400' onClick={handleLogin}>
        Submit
      </Button>
    </form>
    </div>
    </div>
  )
}
