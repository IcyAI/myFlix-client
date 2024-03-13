import { createRoot } from 'react-dom/client';

//Import mainview component, which is the parent component, face of website
import { mainView } from './components/MainView/mainView';

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others), return mainView
const MyFlixApplication = () => {
  return <mainView />;
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);