import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import AppContainer from './components/AppContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
    return (
        <ChakraProvider>
            <AppContainer />
        </ChakraProvider>
    );
}