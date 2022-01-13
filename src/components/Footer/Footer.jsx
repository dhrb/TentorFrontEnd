import footerImg from "./../../assets/footerLogo.svg";
import footerArrow from "./../../assets/footerArrow.svg";
import fcss from "./Footer.module.css";
import Popup from "./../Contacts_popup/Popup";
import { useState } from 'react';

const Footer = () => {
    const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <div className={fcss.footer}>
            <img src = {footerImg} alt={fcss.footerImg} />
            <span> 2021 Ⓒ Всі права захищено </span>
            <img src={footerArrow} alt="footerArrow" className={fcss.footerArrow}/>
            <button
                onClick = {() => setButtonPopup(true)}
                className={fcss.footerPhoneBtn}>
                    Связатся с нами
            </button>
            <Popup 
                trigger = {buttonPopup}
                setTrigger = {setButtonPopup}
            >
            </Popup>
        </div>
    )
}

export default Footer;