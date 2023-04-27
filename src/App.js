import PagePaths from "./pages/PagePaths";
import { CartContextProvider } from "context/cartContext";
import "./styles/style.scss";

function App() {
  return (
    <CartContextProvider>
      <PagePaths />
    </CartContextProvider>
  );
}

export default App;
