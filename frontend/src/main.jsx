
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import {ChakraProvider,extendTheme} from "@chakra-ui/react"
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext.jsx'
import { RecoilRoot } from 'recoil'

const theme = extendTheme({
  styles: {
    global: {
      // Global styles
      '.homepage': {
        backgroundColor: "#FFFF00",  // Set background color for the homepage section
        fontFamily: "Arial",
        margin: 0,
        padding: 0,
      },
      header: {
        backgroundColor:"#00FF00",
       
        textAlign: 'center',
        padding: '1em',
        fontWeight:"bold",
        fontSize:"xx-large"
    },
    nav:{
      marginTop:"20px"
    },
       ul :{
        listStyleType: "none",
        padding: 0,
        display: "Flex",
        justifyContent: "space-around",
        backgroundColor: "#808b96",
    },
    section :{
      padding: "1em",
      margin: "1em",
      backgroundColor: "white",
      fontSize:"x-large",
      fontWeight:"bold",
  },
  footer: {
      textAlign: "center",
      padding:"em",
      backgroundColor:"#808b96",
      color: "white",
      marginTop:"80px",
  }
    },
  },
});

createRoot(document.getElementById('root')).render(
  
    <ChakraProvider theme={theme}>
    <RecoilRoot>
    <BrowserRouter>
<AuthProvider>
    <App />
    </AuthProvider>
    </BrowserRouter>
    </RecoilRoot>
  </ChakraProvider>,
  
)
