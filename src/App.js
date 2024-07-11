import { useState } from "react";
import data from "./models/books.json";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [books, setBooks] = useState(data);

  return (
    <div>
      <ForgotPassword />

      {/* nesting with specialization */}
      <WelcomeMessage />
    </div>
  );
}

export default App;
