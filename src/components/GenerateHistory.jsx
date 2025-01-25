import { GENERATE_DATA } from "../constants"
import {QRCodeSVG} from 'qrcode.react';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    
    return (
        <div>
            
            {data.map((text) => {
                return (
                <div style={{marginLeft: 20, marginTop: 40}}>
                    <p key={text}>{text}</p>
                    <QRCodeSVG value={text} size={100} />
                </div> 
                ) 
            }             
            )}
        </div>      
    )
}