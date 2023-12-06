import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDraweruser from "./NavLsitDraweruser";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthContext();
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            sx={{ color: "#fff", display: { xs: "flex", sm: "none" } }}
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#FFF" }}>
            Real State
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button key="0" sx={{ color: "#fff" }} component={NavLink} to="/">
              Home
            </Button>
            {user ? (
              <>
                <Button
                  key="3"
                  sx={{ color: "#fff" }}
                  component={NavLink}
                  to="/list"
                >
                  List
                </Button>
                <Button
                  key="1"
                  component="a"
                  sx={{ color: "#fff" }}
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                key="2"
                sx={{ color: "#fff" }}
                component={NavLink}
                to="/login"
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Button variant="contained" onClick={() => setOpen(true)}>
        <MenuRoundedIcon />
      </Button> */}
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDraweruser
          NavLink={NavLink}
          setOpen={setOpen}
          user={user}
          logout={logout}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
