import '../styles/globals.css';
import Nav from '../src/components/Nav/Nav'
import HeadInfo from '../src/components/HeadInfo/HeadInfo';
import wrapper from '../redux/store/index';
import { ParallaxProvider } from 'react-scroll-parallax'; //패럴렉스-스크롤
import '@fortawesome/fontawesome-svg-core/styles.css'; //폰트어썸
import { config } from '@fortawesome/fontawesome-svg-core'; //폰트어썸

config.autoAddCss = false; //폰트어썸

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <Nav></Nav>
    <HeadInfo/>
      <ParallaxProvider>
        <Nav />
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
