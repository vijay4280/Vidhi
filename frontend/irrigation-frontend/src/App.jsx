import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home";
import Products from "./pages/Products/Products"
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import Categories from "./admin/Categories";
import Products1 from "./admin/Products1";
import Pages from "./admin/Pages";
import AdminRoute from "./admin/AdminRoute";
import DripPage from "./pages/Products/drip/DripPage";
import PlainLateral from "./pages/Products/drip/PlainLateral";
import Cylindrical from "./pages/Products/drip/Cylindrical";
import FlatDripline from "./pages/Products/drip/FlatDripLine";
import SprinklerPage from "./pages/Products/sprinkler/SprinklerPage";
import BrassFullCircle from "./pages/Products/sprinkler/BrassFullCircle";
import BrassPartCircle from "./pages/Products/sprinkler/BrassPartCircle";
import AluminiumSprinkler from "./pages/Products/sprinkler/AluminiumSprinkler";
import RainPage from "./pages/Products/rain/RainPage";
import LandscapePage from "./pages/Products/landscape/LandscapePage";
import EconomicalPage from "./pages/Products/economical/EconomicalPage";
import VidhiKitPage from "./pages/Products/vidhikit/VidhiKitPage";
import CompanyProfile from "./pages/about/CompanyProfile";
import FounderVisionPage from "./pages/about/FounderVisionPage";
import OnlinePCDripper from "./pages/Products/drip/OnlinePCDripper";
import AdjustableDripper from "./pages/Products/drip/AdjustableDripper";
import AdjustableBubbler from "./pages/Products/drip/AdjustableBubbler";
import TwoFourWayConnector from "./pages/Products/drip/TwoFourWayConnector";
import PotArrowDripper from "./pages/Products/drip/PotArrowDripper";
import SpaghettiMicroTube from "./pages/Products/drip/SpaghettiMicroTube";
import AntiBugCap from "./pages/Products/drip/AntiBugCap";
import Misters from "./pages/Products/drip/Misters";
import MicroSprinkler from "./pages/Products/drip/MicroSprinkler";
import OneWayFogger from "./pages/Products/drip/OneWayFogger";
import FourWayFogger from "./pages/Products/drip/FourWayFogger";
import DripLateralFittings from "./pages/Products/drip/DripLateralFittings";
import YTypeFilter from "./pages/Products/drip/YTypeFilter";
import TTypeFilter from "./pages/Products/drip/TTypeFilter";
import VenturiInjector from "./pages/Products/drip/VenturiInjector";
import AirReleaseValve from "./pages/Products/drip/AirReleaseValve";
import SingleUnionBallValve from "./pages/Products/drip/SingleUnionBallValve";
import DoubleUnionBallValve from "./pages/Products/drip/DoubleUnionBallValve";
import PressureReliefValve from "./pages/Products/drip/PressureReliefValve";
import PressureGauge from "./pages/Products/drip/PressureGauge";
import PlasticFullCircleSprinkler from "./pages/Products/sprinkler/PlasticFullCircleSprinkler"; 
import ServiceSaddles from "./pages/Products/sprinkler/ServiceSaddles";
import MiniSprinklerAccessories from "./pages/Products/sprinkler/MiniSprinklerAccessories";
import RiserPipes from "./pages/Products/sprinkler/RiserPipes";
import RainSilverSprinkler from "./pages/Products/rain/RainSilverSprinkler";
import RainSilverSprinklerStand from "./pages/Products/rain/RainSilverSprinklerStand";
import RainGoldSprinkler from "./pages/Products/rain/RainGoldSprinkler";
import RainGoldSprinklerStand from "./pages/Products/rain/RainGoldSprinklerStand";
import RainVioletSprinkler from "./pages/Products/rain/RainVioletSprinkler";
import RainVioletSprinklerStand from "./pages/Products/rain/RainVioletSprinklerStand";
import RainDiamondSprinkler from "./pages/Products/rain/RainDiamondSprinkler";
import RainDiamondSprinklerStand from "./pages/Products/rain/RainDiamondSprinklerStand";
import PlainLateralPolytubes from "./pages/Products/landscape/PlainLateralPolyTubes";
import Inline from "./pages/Products/landscape/Inline";
import Online from "./pages/Products/landscape/Online";
import TurboKey from "./pages/Products/landscape/TurboKey";
import TwoWay from "./pages/Products/landscape/TwoWay";
import Pot from "./pages/Products/landscape/Pot";
import Anti from "./pages/Products/landscape/Anti";
import DistriPipe from "./pages/Products/landscape/DistriPipe";
import Fittings from "./pages/Products/landscape/Fittings";
import Air from "./pages/Products/landscape/Air";
import Single from "./pages/Products/landscape/Single";
import Double from "./pages/Products/landscape/Double";
import Pressure from "./pages/Products/landscape/Pressure";
import Gauge from "./pages/Products/landscape/Gauge";
import Low from "./pages/Products/economical/Low";
import Valve from "./pages/Products/landscape/Valve";
import Saddles from "./pages/Products/landscape/Saddles";
import Swing from "./pages/Products/landscape/Swing";
import Quick from "./pages/Products/landscape/Quick";
import ThinWall from "./pages/Products/economical/ThinWall";
import TapeFlat from "./pages/Products/economical/TapeFlat";
import TapeFittings from "./pages/Products/economical/TapeFittings";






 


function App() {
return (
<BrowserRouter>
<Routes>
 <Route element={<MainLayout />}>
            {/* MAIN PAGE ROUTE */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />
       

          {/* DRIP  */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/drip" element={<DripPage />} />
          <Route path="/products/drip/plain-lateral" element={<PlainLateral/>}/>
          <Route path="/products/drip/cylindrical-dripline" element={<Cylindrical/>}/>
          <Route path="/products/drip/flat-dripline" element={<FlatDripline/>}/>
          <Route path="/products/drip/onlinepc-dripper-emitters" element={<OnlinePCDripper/>}/>
          <Route path="/products/drip/online-emitters" element={<OnlinePCDripper/>}/>
          <Route path="/products/drip/adjustable-dripper" element={<AdjustableDripper/>}/>
          <Route path="/products/drip/adjustable-bubbler" element={<AdjustableBubbler/>}/>
          <Route path="/products/drip/2-4-way-connector" element={<TwoFourWayConnector/>}/>
          <Route path="/products/drip/pot-dripper/arrow-dripper" element={<PotArrowDripper/>}/>
          <Route path="/products/drip/5.5-spagetty-pipe" element={<SpaghettiMicroTube/>}/>
          <Route path="/products/drip/antibug-cap" element={<AntiBugCap/>}/>
          <Route path="/products/drip/misters" element={<Misters/>}/>
          <Route path="/products/drip/microsprinkler" element={<MicroSprinkler/>}/>
          <Route path="/products/drip/1-way-fogger" element={<OneWayFogger/>}/>
          <Route path="/products/drip/4-way-fogger" element={<FourWayFogger/>}/>
          <Route path="/products/drip/drip-lateral-fitting" element={<DripLateralFittings/>}/>
          <Route path="/products/drip/y-type-filter" element={<YTypeFilter/>}/>
          <Route path="/products/drip/t-type-filter" element={<TTypeFilter/>}/>
          <Route path="/products/drip/venturi-injector" element={<VenturiInjector/>}/>
          <Route path="/products/drip/air-release-valve" element={<AirReleaseValve/>}/>
          <Route path="/products/drip/single-union-ball-valve" element={<SingleUnionBallValve/>}/>
          <Route path="/products/drip/double-union-ball-valve" element={<DoubleUnionBallValve/>}/>
          <Route path="/products/drip/pressure-relief-valve" element={<PressureReliefValve/>}/>
          <Route path="/products/drip/pressure-gauge" element={<PressureGauge/>}/>
          


         {/* SPRINKLER */}
           <Route path="/products/sprinkler" element={<SprinklerPage />} />
           <Route path="/products/sprinkler/brass-full-circle-sprinkler" element={<BrassFullCircle />} />
           <Route path="/products/sprinkler/brass-part-circle-sprinkler" element={<BrassPartCircle />} />
           <Route path="/products/sprinkler/aluminium-sprinkler" element={<AluminiumSprinkler />} />
           <Route path="/products/sprinkler/plastic-full-circle-sprinkler" element={<PlasticFullCircleSprinkler />} />
           <Route path="/products/sprinkler/service-saddles" element={<ServiceSaddles />} />
           <Route path="/products/sprinkler/mini-sprinkler-accessories" element={<MiniSprinklerAccessories />} />
           <Route path="/products/sprinkler/riser-pipes" element={<RiserPipes />} />


         {/* RAIN  */}
          <Route path="/products/rain" element={<RainPage />} />
          <Route path="/products/rain-silversprinkler" element={<RainSilverSprinkler />} />
          <Route path="/products/rain-silversprinkler-stand" element={<RainSilverSprinklerStand />} />
          <Route path="/products/rain-goldsprinkler" element={<RainGoldSprinkler />} />
          <Route path="/products/rain-goldsprinkler-stand" element={<RainGoldSprinklerStand />} />
          <Route path="/products/rain-violetsprinkler" element={<RainVioletSprinkler />} />
          <Route path="/products/rain-violetsprinkler-stand" element={<RainVioletSprinklerStand />} />
          <Route path="/products/rain-diamondsprinkler" element={<RainDiamondSprinkler />} />
          <Route path="/products/rain-diamondsprinkler-stand" element={<RainDiamondSprinklerStand />} />

         {/* LANDSCAPE*/}
         <Route path="/products/landscape" element={<LandscapePage />} />
         <Route path="/products/landscape/plain-drip/polytubes" element={<PlainLateralPolytubes />} />
         <Route path="/products/landscape/cylindrical-dripline/inline-drip-tube" element={<Inline />} />
         <Route path="/products/landscape/online-pc-dripper-emitters" element={<Online />} />
          <Route path="/products/landscape/online-emitter-npc-turbokey-drippers" element={<TurboKey />} />
          <Route path="/products/landscape/2way-4way-connector" element={<TwoWay/>} />
          <Route path="/products/landscape/pot-dripper/arrow-dripper" element={<Pot/>} />
          <Route path="/products/landscape/anti-bug-cap" element={<Anti/>} />
          <Route path="/products/landscape/6mm-pipe-spaghetti/distributor-pipe" element={<DistriPipe/>} />
          <Route path="/products/landscape/drip-fittings-accessories" element={<Fittings/>} />
          <Route path="/products/landscape/air-release-valve" element={<Air/>} />
          <Route path="/products/landscape/single-union-ball-valve" element={<Single/>} />
          <Route path="/products/landscape/double-union-ball-valve" element={<Double/>} />
          <Route path="/products/landscape/pressure-relief-valve" element={<Pressure/>} />
          <Route path="/products/landscape/pressure-gauge" element={<Gauge/>} />
          <Route path="/products/landscape/valve-box" element={<Valve/>} />
          <Route path="/products/landscape/saddles" element={<Saddles/>} />
          <Route path="/products/landscape/swing-joint" element={<Swing/>} />
          <Route path="/products/landscape/quick-coupling-valves-key-elbow" element={<Quick/>} />


         {/* ECONOMICAL*/}

          <Route path="/products/economical" element={<EconomicalPage />} />
          <Route path="/products/economical/low-thickness-plain-laterals" element={<Low />} />
          <Route path="/products/economical/thinwall-dripline-cylindrical" element={<ThinWall />} />
          <Route path="/products/economical/thinwall-driptape-flat" element={<TapeFlat />} />
          <Route path="/products/economical/thinwall-driptape-fittings" element={<TapeFittings />} />


         {/* VIDHI KIT */}
         <Route path="/products/vidhikit" element={<VidhiKitPage />} />
 
           {/* ABOUT US PAGE ROUTE */}
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/founder-vision" element={<FounderVisionPage />} />

        </Route>


<Route path="/admin" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={
    <AdminRoute>
      <Dashboard />
    </AdminRoute>
  } />
<Route path="/admin/categories"element={
    <AdminRoute>
      <Categories />
    </AdminRoute>
  }/>
<Route path="/admin/products" element={<Products1 />} />
<Route path="/admin/pages" element={<Pages />} />
</Routes>
</BrowserRouter>
);
}


export default App;