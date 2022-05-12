import ProviderTheme from "./Context/ContextDarkMode";
import ProviderForm from "./Context/ContextForm";
import { Routes, Route } from "react-router-dom";
import ReservationForm from "./Pages/ReservationForm/ReservationForm";
import "./App.css";
import ReservationSucces from "./Pages/ReservationSucces/ReservationSucces";

function App() {
  return (
    <ProviderTheme>
      <ProviderForm>
        <Routes>
          <Route path="/" exact element={<ReservationForm />} />
          <Route path="/reservationSucces" element={<ReservationSucces />} />
        </Routes>
      </ProviderForm>
    </ProviderTheme>
  );
}

export default App;
