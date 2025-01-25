import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import s from './QrCodeGenerator.module.css'
import { GENERATE_DATA } from '../../constants';


export const QrCodeGenerator = () => {
    
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
       
       
    const onClickHandler = (event) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, value])
            )        

        setResult(value);
        setValue('')
    }
    
    const onChangeHandler = (event) => {
        setValue(event.target.value);  
        setResult('')      
    }

    console.log(result)  
    
  
    return (
        <div className={s.container}>              
                     
            <input type="text" 
            value={value}
            placeholder="Введите текст или ссылку..." 
            onChange={onChangeHandler} 
            className={s.input} />

            <button type="button" 
            onClick={onClickHandler}
            className={s.button}>
                Сгенерировать QR
            </button> 
            
            {result !== '' && (
            <QRCodeSVG value={result} size={200} />
            )}

        </div>
    )
}       