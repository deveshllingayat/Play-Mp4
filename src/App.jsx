import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter> */}
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
}

export default App;
