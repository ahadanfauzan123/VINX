import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import {ThemeProvider} from 'next-themes'
import { RecoilRoot } from 'recoil';
import "swiper/css/bundle";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </SessionProvider>
  
  )
}

export default MyApp
