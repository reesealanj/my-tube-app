import '../styles/globals.css'
import SidebarLayout from '../components/Layout/SidebarLayout'

function MyApp({ Component, pageProps }) {
  return (
    <SidebarLayout>
      <Component {...pageProps} />
    </SidebarLayout>
  )
}

export default MyApp
