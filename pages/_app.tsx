import '../styles/scss/index.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App;