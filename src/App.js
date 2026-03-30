import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/pages/Navigation';
import Footer from './components/pages/Footer';
// Core Pages
import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import BlogSectionClassic from './components/pages/Blog';

// Product Group 1: Tapper Button Bits
import Pulanka from './components/productpage/Tapper button bits/Pulanka';
import LTTapper from './components/productpage/Tapper button bits/LT Tapper';
import Nanchang from './components/productpage/Tapper button bits/Nanchang';
import PLKSProductPage from './components/productpage/Tapper button bits/PLKS';

// Product Group 2: Jack Hammer Spare Parts (FIXED PATHS)
import BushProductPage from './components/productpage/PSI/MDS Jack Hammer/Bush';
import RangerBoxProductPage from './components/productpage/PSI/MDS Jack Hammer/Ranger Box';
import PistonProductPage from './components/productpage/PSI/MDS Jack Hammer/Piston';
import SideBoltProductPage from './components/productpage/PSI/MDS Jack Hammer/Side bold';
import RetainerLockProductPage from './components/productpage/PSI/MDS Jack Hammer/Retainer lock';

// Product Group 3: Atlas Copco VT4 (FIXED PATHS)
import LinerSetProductPage from './components/productpage/Atlas copco VT 4 Compresser/Liner set';
import CompressorPistonProductPage from './components/productpage/Atlas copco VT 4 Compresser/Piston';
import ConnectRodProductPage from './components/productpage/Atlas copco VT 4 Compresser/Connect Rod';
import FilterProductPage from './components/productpage/Atlas copco VT 4 Compresser/Air filter and Oil filter';
import CompressorRingsProductPage from './components/productpage/Atlas copco VT 4 Compresser/Rings';
import CompressorValvesProductPage from './components/productpage/Atlas copco VT 4 Compresser/Valves';

// Product Group 4: Drill Rods (FIXED NAMES)
import SandcoRodProductPage from './components/productpage/Drill Rods/Sandco Tapper drill rods';
import BlueTapperRodProductPage from './components/productpage/Drill Rods/Blue Tapper drill rods';
import ImportedRodsProductPage from './components/productpage/Drill Rods/Imported drill rods';

// Product Group 5: Rock Drill Hoses
import DurlonHoseProductPage from './components/productpage/Hose/DurlonRockdrillhose';
import StandardHoseProductPage from './components/productpage/Hose/Starndard';
import DrillonHoseProductPage from './components/productpage/Hose/Drillon';

function App() {
  return (
    <Router>
      <Navigation />
      


      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<BlogSectionClassic />} />
        <Route path="/contactus" element={<Contactus />} />

        {/* --- Product Routes --- */}
        <Route path="/tapper-bits/pulanka" element={<Pulanka />} />
        <Route path="/tapper-bits/lt" element={<LTTapper />} />
        <Route path="/tapper-bits/nanchang-plus" element={<Nanchang />} />
        <Route path="/tapper-bits/plks" element={<PLKSProductPage />} />

        <Route path="/jack-hammer/bush" element={<BushProductPage />} />
        <Route path="/jack-hammer/ranger-box" element={<RangerBoxProductPage />} />
        <Route path="/jack-hammer/piston" element={<PistonProductPage />} />
        <Route path="/jack-hammer/side-bolt" element={<SideBoltProductPage />} />
        <Route path="/jack-hammer/retainer-lock" element={<RetainerLockProductPage />} />

        <Route path="/compressor/liner-set" element={<LinerSetProductPage />} />
        <Route path="/compressor/piston" element={<CompressorPistonProductPage />} />
        <Route path="/compressor/connect-rod" element={<ConnectRodProductPage />} />
        <Route path="/compressor/filters" element={<FilterProductPage />} />
        <Route path="/compressor/rings" element={<CompressorRingsProductPage />} />
        <Route path="/compressor/valves" element={<CompressorValvesProductPage />} />

        <Route path="/drill-rods/sandco" element={<SandcoRodProductPage />} />
        <Route path="/drill-rods/blue-tapper" element={<BlueTapperRodProductPage />} />
        <Route path="/drill-rods/imported" element={<ImportedRodsProductPage />} />

        <Route path="/hoses/durlon" element={<DurlonHoseProductPage />} />
        <Route path="/hoses/standard" element={<StandardHoseProductPage />} />
        <Route path="/hoses/drillon" element={<DrillonHoseProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;