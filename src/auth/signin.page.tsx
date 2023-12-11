import { Box } from "@mui/material"
import SignInForm from "./components/signin.form"

const SignInPage = () => {
  return (
    <Box sx={{padding: '20px'}}>
      <h1>Sign in</h1>
      <SignInForm />
    </Box>
  )
}

export default SignInPage