import PatientDashboardLayout from "../../templates/patient-dashboard-layout";
import NotificationIcon from "../../components/atoms/vectors/NotificationIcon";

import './PatientProfileStyles.scss'
import Input from "../../components/atoms/Input";

const PatientProfile = () => {
  return<PatientDashboardLayout>
    <div>
    <div className="profile">
    <img src="public/img/Frame.webp"/>
    <div className="info">
    <span className="profile-name">Muhammad-Jumah</span>
    <span className="text-[#828282]">1345678BE</span>
    </div>
    </div>
    <div>
    <h1 className="heading">General Info</h1>
    </div>
    <div >
    <div>
      <span>Last Name</span>
      <span>Muhammad</span>
    </div>
    <div>
      <span>First Name</span>
      <span>Jamiu</span>
    </div>
    <div>
      <span>Email Address</span>
      <span>muhammadjamiu@gmail.com</span>
    </div>
    <div>
      <span>Phone Number</span>
      <span>08102312795</span>
    </div>
    <div>
      <span>Address</span>
      <span>N0 42,  Islale Aluko, Ilorin, Kwara State</span>
    </div>
    </div>
    
    <div>
    <h1 className="heading">Medical Info</h1>
    </div>
    <div >
    <div>
      <span>Current Illness</span>
      <span>Malaria Fever</span>
    </div>
    <div>
      <span>Current Medication</span>
      <span>Coartem</span>
    </div>
    <div>
      <span>Health History</span>
      <span>Hypertension</span>
    </div>
    <div>
      <span>Phone Number</span>
      <span>08102312795</span>
    </div>
    
    </div>

    <div>
    <h1 className="heading">Health Info</h1>
    </div>
    <div >
    <div>
      <span>Health History</span>
      <span>Muhammad</span>
    </div>
    <div>
      <span>Age</span>
      <span>27</span>
    </div>
    <div>
      <span>Occupation</span>
      <span>Civil servant</span>
    </div>
    <div>
      <span>Next Of kin</span>
      <span>Yusuf Muhammad</span>
    </div>
    <div className="flex gap-x-7">
      <span>Allergies</span>
      <span>Pelliciline, Tiloron, Honey</span>
    </div>
    </div>
    </div>
  </PatientDashboardLayout>;
    
    
  
  
  
  
    
   
  
};

export default PatientProfile;
