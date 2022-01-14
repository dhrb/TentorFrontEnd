import popupCss from './Popup.module.css';
import tgImg from './../../assets/tgContact.png';
import viberImg from './../../assets/viberContact.png';
import closeBtnImg from './../../assets/closeBtnImg.svg';


const Popup = (props) => {
    return (props.trigger) ? (
      <div className = {popupCss.popup}>
        <div className = {popupCss.popupInner}>
            <img 
                src = {closeBtnImg}
                onClick = {() => props.setTrigger (false)}
                className={ popupCss.closePopupBtn }
                alt = "closeBtnImg"
            />
            {props.children}

            <a
                href="tel:+38 (097) 000-00-00"
                className = { popupCss.contactPhone }
            >
                Зателефонувати: +38 (097) 000-00-00
            </a>

            <br />
            
            <a 
                href="https://t.me/smaugDragon"
                className = { popupCss.contactTg }
            > 
                Написати в Telegram 
                <img 
                    src = {tgImg}
                    alt = "tgImg"
                    className = { popupCss.tgImg }
                />
            </a>

            <br />

            <a 
                href = "viber://chat/?number=%2B380953852947"
                className = { popupCss.contactViber }
            >
                Написати в Viber
                <img 
                    src = {viberImg}
                    alt = "tgImg"
                    className = { popupCss.viberImg }
                />
            </a>

        </div>
      </div>
    ) : '' ;
  }

export default Popup;