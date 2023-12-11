import { Typography } from "@mui/material"
import { FC } from "react"
import { NavLink } from "react-router-dom"
import { LogoTextProps } from "./types/logo-text.types"

const LogoText: FC<LogoTextProps> = ({mobile}: LogoTextProps) => {
  return (
    mobile ?
      <Typography
        variant="h5"
        noWrap
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Shop
      </Typography>
      : <NavLink
        to='/'
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Shop
        </Typography>
      </NavLink>
  )
}

export default LogoText