"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="app-header" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"/"}>Blink Basket</Link>
          </Typography>

          {pathname === "/home" ? (
            <Link href={"/"}>
              <Button color="inherit">Logout</Button>
            </Link>
          ) : (
            <>
              <Link href={"/login"}>
                <Button color="inherit">Login</Button>
              </Link>
              <Link href={"/register"}>
                <Button color="inherit">Register</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
