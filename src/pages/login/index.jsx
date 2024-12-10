import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Login.scss';

const initialState = {
  username: '',
  password: ''
};

const Login = () => {
  const [formInput, setFormInput] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormInput = (event) => {
    const { value, name } = event.target;
    setFormInput({
      ...formInput,
      [name]: value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    for (let key in formInput) {
      if (formInput[key] === '') {
        toast.error('Please fill all input fields: ' + key);
        return;
      }
    }

    setLoading(true);
    setTimeout(() => {
      const user = formInput.username === 'prerna' ? { id: 1, username: 'prerna', isSeller: true } : { id: 2, username: 'anne', isSeller: false };
      localStorage.setItem('currentUser', JSON.stringify(user)); // Store user in local storage
      toast.success("Welcome back!", {
        duration: 3000,
        icon: "😃"
      });
      navigate('/');
      setLoading(false);
    }, 2000); // Simulate a network request delay
  };

  return (
    <div className='login'>
      <form onSubmit={handleFormSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="username">Username</label>
        <input name='username' placeholder='johndoe' onChange={handleFormInput} />

        <label htmlFor="password">Password</label>
        <input name='password' type='password' placeholder='password' onChange={handleFormInput} />
        <button disabled={loading} type='submit'>{loading ? 'Loading' : 'Login'}</button>
        <button className="google-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="google-logo" />
          Sign in with Google
        </button>      </form>
    </div>
  );
};

export default Login;