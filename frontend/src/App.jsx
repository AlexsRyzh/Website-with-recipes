import { RouterProvider } from "react-router";
import router from "./router/router";
import { Box } from "@mui/material";
import "./reset.scss";
import "./fonts/fonts.scss";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      {/* <RouterProvider router={router} /> */}
      Hello world
    </StyledEngineProvider>
  );
}

export default App;
