import "./App.css";
import { Container } from "@mui/material";
import { useState } from "react";
import FormUserDetails from "./components/FormUserDetails";
import FormPersonalDetails from "./components/FormPersonalDetails";
import FormOutput from "./components/FormOutput";

const formInput = {
  name: "",
  gender: "",
  email: "",
  mobile: "",
  occupation: "",
  age: "",
  state: "",
  city: ""
}

function App() {
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState(formInput);

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = input => event => {
    const value = event.target.value;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  }
  console.log(formData, "dataa")

  switch (step) {
    case 1:
      return (
        <div className="App">
          <Container>
            <FormUserDetails
              nextStep={nextStep}
              handleFormData={handleInputData}
              values={formData} />
          </Container>
        </div>
      )
    case 2:
      return (
        <div className="App">
          <Container>
            <FormPersonalDetails
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData} />
          </Container>
        </div>
      )
    case 3:
      return (
        <div className="App">
          <Container>
            <FormOutput values={formData} />
          </Container>
        </div>
      )
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

export default App;

