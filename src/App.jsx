import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Guidelines from './pages/Guidelines'
import AwarenessTools from './pages/AwarenessTools'
import TrainingCourses from './pages/TrainingCourses'
import Research from './pages/Research'
import SafetyGuides from './pages/SafetyGuides'
import SupportService from './pages/SupportService'
import Eldery from './pages/Eldery'
import Parents from './pages/Parents'
import Teachers from './pages/Teachers'
import Women from './pages/Women'
import Teens from './pages/Teens'
import AboutUs from './pages/AboutUs'
import PillarsMain from './pages/PillarsMain'
import KeyTopics from './pages/KeyTopics';
import Activity from './pages/Activity';
import Partners from './pages/Partners';
import Outputs from './pages/Outputs';
import RiskEldery from './pages/RiskEldery';
import RiskWomen from './pages/RiskWomen';
import RiskParents from './pages/RiskParents';
import RiskTeachers from './pages/RiskTeachers';
import Competitions from "./pages/Competitions";
import Conferences from "./pages/Conferences";
import Workshops from "./pages/Workshops";
import Seminar from "./pages/Seminar";
import Webinars from "./pages/Webinars";
import Training from "./pages/Training";
import PillarOne from "./pages/PillarOne";
import PillarTwo from "./pages/PillarTwo";
import PillarThree from "./pages/PillarThree";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import RiskYouth from "./pages/RiskYouth";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/guidelines' element={<Guidelines/>} />
        <Route exact path='/awarenesstools' element={<AwarenessTools/>} />
        <Route exact path='/courses' element={<TrainingCourses/>} />
        <Route exact path='/supportservice' element={<SupportService/>} />
        <Route exact path='/research' element={<Research/>} />
        <Route exact path='/safetyguides' element={<SafetyGuides/>} />
        <Route exact path='/women' element={<Women/>} />
        <Route exact path='/eldery' element={<Eldery/>} />
        <Route exact path='/parents' element={<Parents/>} />
        <Route exact path='/teachers' element={<Teachers/>} />
        <Route exact path='/youth' element={<Teens/>} />
        <Route exact path='/keytopics' element={<KeyTopics/>} />
        <Route exact path='/pillarsmain' element={<PillarsMain/>} />
        <Route exact path='/aboutus' element={<AboutUs/>} />
        <Route exact path='/activities' element={<Activity/>} />
        <Route exact path='/partners' element={<Partners/>} />
        <Route exact path='/outputs' element={<Outputs/>} />
        <Route exact path='/riskeldery' element={<RiskEldery/>} />
        <Route exact path='/riskwomen' element={<RiskWomen/>} />
        <Route exact path='/riskyouth' element={<RiskYouth/>} />
        <Route exact path='/riskparents' element={<RiskParents/>} />
        <Route exact path='/riskteachers' element={<RiskTeachers/>} />
        <Route exact path='/competitions' element={<Competitions/>} />
        <Route exact path='/conferences' element={<Conferences/>} />
        <Route exact path='/workshops' element={<Workshops/>} />
        <Route exact path='/seminars' element={<Seminar/>} />
        <Route exact path='/webinars' element={<Webinars/>} />
        <Route exact path='/training' element={<Training/>} />
        <Route exact path='/pillarone' element={<PillarOne/>} />
        <Route exact path='/pillartwo' element={<PillarTwo/>} />
        <Route exact path='/pillarthree' element={<PillarThree/>} />
        <Route exact path='/events' element={<Events/>} />
        <Route exact path='/contactus' element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
