import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const NavLsitDraweruser = ({ NavLink, setOpen, user, logout }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          <ListItem disablePadding key="00">
            <ListItemButton
              component={NavLink}
              to="/"
              onClick={() => setOpen(false)}
            >
              {/* <ListItemIcon>{nav.icon}</ListItemIcon> */}
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          {user ? (
            <>
              <ListItem disablePadding key="03">
                <ListItemButton
                  component={NavLink}
                  to="/list"
                  onClick={() => setOpen(false)}
                >
                  {/* <ListItemIcon>{nav.icon}</ListItemIcon> */}
                  <ListItemText primary="List" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding key="01">
                <ListItemButton
                  component="a"
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                >
                  {/* <ListItemIcon>{nav.icon}</ListItemIcon> */}
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <ListItem disablePadding key="02">
              <ListItemButton
                component={NavLink}
                to="/Login"
                onClick={() => setOpen(false)}
              >
                {/* <ListItemIcon>{nav.icon}</ListItemIcon> */}
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </nav>
    </Box>
  );
};

export default NavLsitDraweruser;
