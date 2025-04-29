import { BrowserRouter, Route, Routes } from "react-router-dom";

import DoorSupervisorCourse from "./components/DoorSupervisorCourse"
import TopUpDoorSupervisors from "./components/TopUpDoorSupervisors"
import TopUpSecurityGuards from "./components/TopUpSecurityGuards"
import EmergencyFirstAid from "./components/EmergencyFirstAid"
import FirstAidatWork from "./components/FirstAidatWork"
import CSCSGreenCardCourse from "./components/CSCSGreenCardCourse"
import TrafficMarshal from "./components/TrafficMarshal"
import SIACCTVOperator from "./components/SIACCTVOperator"
import SSSTS from "./components/SSSTS"
import SMSTS  from "./components/SMSTS"
import PersonalLicence from "./components/PersonalLicence"
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import './App.css';

const App = () =>(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoorSupervisorCourse />} />
        <Route path="/topUpDoorSupervisors" element={<TopUpDoorSupervisors />} />
        <Route path="/topUpSecurityGuards" element={<TopUpSecurityGuards />} />
        <Route path="/emergencyFirstAid" element={<EmergencyFirstAid />} />
        <Route path="/firstAidatWork" element={<FirstAidatWork />} />
        <Route path="/CSCSGreenCardCourse" element={<CSCSGreenCardCourse />} />
        <Route path="/trafficMarshal" element={<TrafficMarshal />} />
        <Route path="/SIACCTVOperator" element={<SIACCTVOperator />} />
        <Route path="/SMSTS" element={<SMSTS  />} />
        <Route path="/SSSTS" element={<SSSTS />} />
        <Route path="/PersonalLicence" element={<PersonalLicence />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
  </BrowserRouter>
  )

export default App;
