import DropdownMenu from "./components/dropdownmenu";
import Footer from "./components/footer";
import Header from "./components/header";

import "./assets/css/style.scss";
import HomePage from "./pages/homepage";
import Button from "./components/button";

function App() {
  return (
    <>
      <Header />
      <DropdownMenu />
      <Button type="icon-right" icon={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5332 8.18661L4.2732 5.44661C4.39737 5.3217 4.46706 5.15274 4.46706 4.97661C4.46706 4.80049 4.39737 4.63152 4.2732 4.50661L1.60654 1.83995" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
      </svg>}>Buy now</Button>
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
