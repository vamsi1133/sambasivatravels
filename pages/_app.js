import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../hoc/Layout/Layout";


function MyApp({ Component, pageProps }) {
  return <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
