import { Scanner } from "react-qr-scanner-aakash"
import { useState } from "react";
import s from './QrCodeScanner.module.css'
import { SCAN_DATA } from "../../constants";

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);
    
    
    const scanHandler = (result) => {
        setScanned(result[0].rawValue)
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue])
            )        
        };
          
   
    return (
        <div className={s.container}>                     
            <Scanner 
            onScan={scanHandler}
            styles={{container: {width: 350}}}
            />
            <p className={s.result}>{scanned}</p>
        </div>
    )
}