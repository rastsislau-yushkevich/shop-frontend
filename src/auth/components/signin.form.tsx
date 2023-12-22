import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import { SignInFormData } from "auth/types/sign-in.form";
import { useSignInMutation } from "auth/store/authApi.slice";
import { useDispatch } from "react-redux";
import { setTokens, setUser } from "auth/store/auth.slice";
import { useLazyGetMeQuery } from "users/store/usersApi.slice";
import { useNavigate } from "react-router-dom";
import { AuthDto } from "auth/types/auth.dto";
import { store } from "store";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormData>();
  
  const [signIn, {data: accessToken, isLoading: authIsLoading}] = useSignInMutation();
  const [getCurrentUser, {data, isLoading: userIsLoading}] = useLazyGetMeQuery();
  
  const handleSignIn = async (formData: SignInFormData) => {
    try {
      const tokens: AuthDto = await signIn(formData).unwrap();
      dispatch(setTokens(tokens));
      localStorage.setItem('access_token', JSON.stringify(tokens.access_token));
      localStorage.setItem('refresh_token', JSON.stringify(tokens.refresh_token));
      // document.cookie = `access_token=${tokens.access_token}`
      // document.cookie = `refresh_token=${tokens.refresh_token}`
      const user = await getCurrentUser().unwrap();
      localStorage.setItem('currentUser', JSON.stringify(user));
      dispatch(setUser(localStorage.getItem('currentUser')))
      navigate('/products')
    } catch (error) {
      console.log(error)
    }
  }

  if(authIsLoading || userIsLoading) {
    return <div>Loading...</div>
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit((formData) => handleSignIn(formData))}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        height: '90vh',
      }}
    >
      <Box>
        <TextField
          color='secondary'
          label='Email'
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          {...register('email',
            {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Must be an email'
              }
            })}
        />
      </Box>
      <Box>
        <TextField
          color='secondary'
          label='Password'
          type='password'
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          {...register('password', { required: 'Password is required' })}
        />
      </Box>
      <Button
        type='submit'
        color='secondary'
        variant='outlined'
      >Submit</Button>
    </Box>
  )
}

export default SignInForm