import gitLogo from "../../assets/github.svg";
const Github = ()=>{
    return(
        <div>
             <div>
                <a href="https://github.com/" target="_blank">
                <img src={gitLogo} className="logo github" alt="Github logo" />
                </a>
            </div>
        </div>
    );
};

export default Github;