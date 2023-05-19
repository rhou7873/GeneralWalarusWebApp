import { AppBar, Toolbar, MenuItem, Typography, IconButton } from "@mui/material";
import React from "react";

interface NavItem {
    title: string,
    route: string
}

const navItems: NavItem[] = [
    { title: "Item 1", route: "/route1" },
    { title: "Item 2", route: "/route2" },
    { title: "Item 3", route: "/route3" },
]

function NavBar() {
  return (
    <AppBar className="border relative">
        <Toolbar>
            {navItems.map(item => {
            return (
                <MenuItem key={item.title}>
                    <Typography>{item.title}</Typography>
                </MenuItem>
            )
            })}
        </Toolbar>
    </AppBar>
  )
}

export default NavBar