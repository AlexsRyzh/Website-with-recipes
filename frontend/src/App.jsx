import { RouterProvider } from "react-router";
import router from "./router/router";
import "./reset.scss";
import "./fonts/fonts.scss";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  );
}

export default App;
