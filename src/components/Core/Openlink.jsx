const OpenLink =({redirectURL, logoImage})=>{
    return(
        <div>
            <td>
                <a href={redirectURL} target="_blank">
                    <img src={logoImage} className="logo" alt="Vite logo"/>
                </a>
            </td>
        </div>
    )
}

export default OpenLink;