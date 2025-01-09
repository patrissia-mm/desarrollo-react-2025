import Body from '../components/Home/Body'
import Footer from '../components/Home/Footer'

import OpenLink from "../components/Core/Openlink.jsx"
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import gitLogo from "../assets/github.svg";

const Home =()=>{
    return(
        <div>
          <tr>
          <td><OpenLink redirectURL="https://vite.dev"  logoImage={viteLogo} /></td>
          <td><OpenLink redirectURL="https://react.dev"  logoImage={reactLogo} /></td>
          <td><OpenLink redirectURL="https://github.com/"  logoImage={gitLogo} /></td>
          </tr>
          <Body />
          <Footer />
        </div>
    );
}

export default Home