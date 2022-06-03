import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material'; /*Dispnibiliza as variáveis para o projeto*/
import tema from '../ui/themes/tema';
import Cabecalho from '../ui/components/Cabecalho/Cabecalho';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Cabecalho />      
      <Component {...pageProps} />
    </ThemeProvider>
  ); 
}
/*O Return vai aparecer para todas as páginas */

export default MyApp
