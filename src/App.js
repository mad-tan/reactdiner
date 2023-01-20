import { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Components/store/CartProvider";

const App = () => {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      <Header onShowCart = {showCartHandler} />
      {cartShow && <Cart onHideCart = {hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
