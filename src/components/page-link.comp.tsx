import { Button, MenuItem, Typography } from "@mui/material"
import { PageLinkProps } from "./types/page-link.types"
import { FC } from "react"
import { NavLink } from "react-router-dom"

const PageLink: FC<PageLinkProps> = ({link, handler}) => {
  return (
    <Button
    color='secondary'
    sx={{
      display: 'block'
    }}>
      <MenuItem onClick={handler ? handler : () => {}}>
        <NavLink style={{color: 'inherit', textDecoration: 'none', textTransform: 'capitalize'}} to={link}><Typography textAlign="center">{link}</Typography></NavLink>
      </MenuItem>
    </Button>
  )
}

export default PageLink