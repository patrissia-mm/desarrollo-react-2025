import Body from '../components/Home/Body'
import Footer from '../components/Home/Footer'

import OpenLink from "../components/Core/Openlink.jsx"
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import gitLogo from "../assets/github.svg";

import { useSelector, useDispatch } from 'react-redux'

const Home =()=>{
  const count = useSelector((state) => state.counter.value)
    return(
        <>
          <center><strong>Count value: <span>{count}</span></strong></center>
          <OpenLink redirectURL="https://vite.dev"  logoImage={viteLogo} />
          <OpenLink redirectURL="https://react.dev"  logoImage={reactLogo} />
          <OpenLink redirectURL="https://github.com/"  logoImage={gitLogo} />

          <Body />
          <Footer />
        </>
    );
}

export default Home