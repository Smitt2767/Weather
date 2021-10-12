import React, { useContext, useEffect, useState } from "react";
import Alert from "./components/UI/Alert/Alert";
import Weather from "./components/Weather";
import { WeatherContext } from "./store/weather-context";
import { Transition } from "react-transition-group";

const App = () => {
  const { errorMessage, setErrorMessage } = useContext(WeatherContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(process.env.NODE_ENV);
  }, []);

  useEffect(() => {
    if (!!errorMessage) setOpen(true);
  }, [errorMessage]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-screen w-screen font-body">
      <Transition
        in={open}
        timeout={300}
        onExited={() => setErrorMessage("")}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <Alert message={errorMessage} onClose={handleClose} state={state} />
        )}
      </Transition>
      <Weather />
    </div>
  );
};

export default App;
