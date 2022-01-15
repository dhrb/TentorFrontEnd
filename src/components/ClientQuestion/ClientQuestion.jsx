import cqcss from './ClientQuestion.module.css';
import shopInfoImg from './../../assets/shopInfo.svg';
import sendQuestionBtn from './../../assets/sendQuestionBtn.svg';

const ClientQuestion = () => {
    return (
        <div className = {cqcss.clienQuestionForm}>
            <div className = {cqcss.ClientInfoForm}>
                <h2 className = {cqcss.formTopText}>
                    Виникли запитання? Напиши нам!
                </h2>
                <p>Вкажіть імя</p>
                <input 
                    type = 'text'
                    className = {cqcss.inputForm}
                />
                <p>Вкажіть E-mail</p>
                <input 
                    type = 'text'
                    className = {cqcss.inputForm}
                />
                <br />
                <p>Вкажіть телефон</p>
                <label type = 'text'/>
                <p>Тема питання</p>
                <input 
                    type = 'text'
                    className = {cqcss.inputForm}
                />
                <br />
                <p>Введіть повідомлення</p>
                <input 
                    type = 'text'
                    className = {cqcss.inputForm}
                />
                <br />
                <input 
                    type = 'checkbox'
                    className = {cqcss.inputForm}
                />
                <span>Я згоден на обробку моїх персональних даних</span>
                <br />
                <input 
                    type = 'checkbox'
                    className = {cqcss.inputForm}
                />
                <span>Я згоден з політикою конфиденційності</span>
            </div>
            <div className = {cqcss.shopInfo}>
                <img 
                    className = {cqcss.shopInfoImg}
                    alt = 'shopInfo'
                    src = {shopInfoImg}    
                />
                <img 
                    className = {cqcss.sendQuestionBtn}
                    alt = 'sendQuestionBtn'
                    src = {sendQuestionBtn}    
                />
            </div>
        </div>
    );
};

export default ClientQuestion;