import React, { Component } from "react";
import { Grommet, Heading, Box } from "grommet";
import Appbar from "./components/Appbar";
const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <Appbar>
            <Heading level="3" margin="none">
              My App
            </Heading>
          </Appbar>
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex align="center" justify="center">
              app body
            </Box>
            <Box
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              sidebar
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
