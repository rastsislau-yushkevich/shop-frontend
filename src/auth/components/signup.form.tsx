import { FieldValues, useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import { SignUpFormData } from "auth/types/sign-up.form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "auth/store/authApi.slice";
import { AuthDto } from "auth/types/auth.dto";
import { setTokens, setUser } from "auth/store/auth.slice";
import { useLazyGetMeQuery } from "users/store/usersApi.slice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormData>();

  const [signUp] = useSignUpMutation();
  const [getCurrentUser] = useLazyGetMeQuery();

  const handleSignUp = async (formData: FieldValues) => {
    try {
      const tokens: AuthDto = await signUp(formData).unwrap();
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

  return (
    <Box
      component='form'
      onSubmit={handleSubmit((data) => handleSignUp(data))}
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
      <Box>
        <TextField
          color='secondary'
          label='Confirm Password'
          type='password'
          helperText={errors.confirmPassword?.message}
          error={!!errors.confirmPassword?.message}
          {...register('confirmPassword', { required: 'Confirm password is required' })}
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

export default SignUpForm