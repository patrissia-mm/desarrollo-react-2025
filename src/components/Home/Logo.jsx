import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import gitLogo from "../../assets/github.svg";
const Logo = ()=>{
    return(
        <div>
             <div>
                <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://github.com/" target="_blank">
                <img src={gitLogo} className="logo github" alt="Github logo" />
                </a>
            </div>
        </div>
    );
};

export default Logo;