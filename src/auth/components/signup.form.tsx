import { FieldValues, useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import { SignUpFormData } from "auth/types/forms.types";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormData>();

  const handleSignUp = (data: FieldValues) => {
    console.log(data)
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