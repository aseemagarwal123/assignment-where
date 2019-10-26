import React from "react";
import "./App.sass";
import { Helmet } from "react-helmet";
import { FormFields } from "./components/form-fields/form-fields";

function App() {
  return (
    <div>
      <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Helmet>
      <FormFields />
    </div>
  );
}

export default App;
