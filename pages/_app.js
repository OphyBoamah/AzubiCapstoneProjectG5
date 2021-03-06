import '../styles/globals.css';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/core';
import { Provider as StyletronProvider } from 'styletron-react';
import { useRouter } from 'next/router';
import { styletron, debug } from '../styletron';

import Navbar from '../utils/Navbars/Navbar';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from '../context/userContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    setToken(JSON.parse(window.localStorage.getItem('auth')));
  }, []);
  return (
    <ChakraProvider>
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <AuthProvider>
          <CSSReset />
          <AnimatePresence initial={false} exitBeforeEnter>
            <Navbar user={user} token={token} />
            <Box>
              <Component {...pageProps} setUser={setUser} />
            </Box>
            {router.pathname === '/' ? (
              ''
            ) : (
              <Box
                as='footer'
                mt={{ md: 16 }}
                mb={6}
                px={{ md: 20 }}
                textAlign='center'
              >
                &copy; 2020. A-Teo. All rights reserved.
              </Box>
            )}
          </AnimatePresence>
        </AuthProvider>
      </StyletronProvider>
    </ChakraProvider>
  );
}

export default MyApp;
