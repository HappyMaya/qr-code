import { SCAN_DATA } from "../constants"
import {QRCodeSVG} from 'qrcode.react';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
    
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