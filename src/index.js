import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AppContainer from './components/AppContainer';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

function App() {
    return (
        <ChakraProvider>
            <AppContainer />
        </ChakraProvider>
    );
}