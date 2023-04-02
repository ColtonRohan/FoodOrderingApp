import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <h2>Let's get started!</h2>
      {showModal && <Cart onClose={hideModalHandler} />}
      <Header onShowCart={showModalHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
