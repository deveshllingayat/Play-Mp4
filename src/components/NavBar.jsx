import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45}></img>
      <Typography px={2} fontWeight={'bold'} variant="h5" color="#fff">Play <span style={{color:'red',fontWeight:'bold'}}>Mp4</span> </Typography>
    </Link>
    <SearchBar  />
  </Stack>
);

export default NavBar;
