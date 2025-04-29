import { Link } from 'react-router-dom'

import './index.css'

const Header = () =>{
  return (
      <ul className="nav-menu">
        <Link className='link' to="/">
          <li className="nav-link">Door Supervisor Course</li>
        </Link>
        <Link className='link' to="/topUpDoorSupervisors">
          <li className="nav-link">Top-Up for Door Supervisors(New)</li>
        </Link>
        <Link className='link' to="/topUpSecurityGuards">
          <li className="nav-link">Top-Up for Security Guards(New)</li>
        </Link>
        <Link className='link' to="/emergencyFirstAid">
          <li className="nav-link">Emergency First Aid</li>
        </Link>
        <Link className='link' to="/firstAidatWork">
          <li className="nav-link">First Aid at Work</li>
        </Link>
        <Link className='link' to="/CSCSGreenCardCourse">
          <li className="nav-link">CSCS Green Card Course</li>
        </Link>
        <Link className='link' to="/trafficMarshal">
          <li className="nav-link">Traffic Marshal</li>
        </Link>
        <Link className='link' to="/SIACCTVOperator">
          <li className="nav-link">SIA CCTV Operator</li>
        </Link>
        <Link className='link' to="/SSSTS">
          <li className="nav-link">SSSTS</li>
        </Link>
        <Link className='link' to="/SMSTS">
          <li className="nav-link">SMSTS</li>
        </Link>
        <Link className='link' to="/PersonalLicence">
          <li className="nav-link">Personal Licence</li>
        </Link>
      </ul>
)
}
export default Header