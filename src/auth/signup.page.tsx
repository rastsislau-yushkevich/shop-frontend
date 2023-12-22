import { Box } from "@mui/material"
import SignUpForm from "./components/signup.form"

const SignUpPage = () => {
  return (
    <Box sx={{padding: '20px'}}>
      <h1>Sign up</h1>
      <SignUpForm />
    </Box>
  )
}

export default SignUpPage