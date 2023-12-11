import { MenuItem, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { PageLinkProps } from "./types/page-link.types"
import { FC } from "react"

const PageLink: FC<PageLinkProps> = ({link, handler}) => {
  return (
    <NavLink
      to={`/${link.toLowerCase()}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <MenuItem onClick={handler ? handler : () => {}}>
        <Typography textAlign="center">{link}</Typography>
      </MenuItem>
    </NavLink>
  )
}

export default PageLink