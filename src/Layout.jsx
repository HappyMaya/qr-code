import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation"
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator"
import { QrCodeScanner } from "./components/Scan/QrCodeScanner"
import { GenerateHistory } from "./components/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory";
import { Copyrights } from "./Copyrights";

export const Layout = () => {
    return (
        <div>            
            <Navigation />
            <Routes>
            <Route path="/generate" element={<QrCodeGenerator />}></Route>
            <Route path="/scan" element={<QrCodeScanner />}></Route>
            <Route path="/scanHistory" element={<ScanHistory />}></Route>
            <Route path="/generateHistory" element={<GenerateHistory />}></Route>
            </Routes>
            <Copyrights />
        </div>
    )
}