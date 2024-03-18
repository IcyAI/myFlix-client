import { createRoot } from 'react-dom/client';

//Import mainview component, which is the parent component, face of website
import { MainView } from './components/MainView/mainView';

import Container from "react-bootstrap/Container";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others), return mainView
//style={{border: "1px solid red"}}
const MyFlixApplication = () => {
  return (
  <Container>
    <MainView />
    </Container>
  )
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);