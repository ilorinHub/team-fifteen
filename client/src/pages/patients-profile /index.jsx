import PatientDashboardLayout from "../../templates/patient-dashboard-layout";
import NotificationIcon from "../../components/atoms/vectors/NotificationIcon";

import './PatientProfileStyles.scss'
import Input from "../../components/atoms/Input";

const PatientProfile = () => {
  return (
    <div>
 <div>
<PatientDashboardLayout>PatientProfile</PatientDashboardLayout>;
    </div>
  <div className="nav">
<Input/>
<div className="Nav-side">
<NotificationIcon/>
<img src="public/img/circle.webp"/>
</div>
  </div>
    </div>
   
  )
};

export default PatientProfile;
