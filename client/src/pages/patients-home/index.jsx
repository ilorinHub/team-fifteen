import Button from "../../components/atoms/button";
import PatientDashboardLayout from "../../templates/patient-dashboard-layout";

import "./PatientHomeStyles.scss";

const PatientHome = () => {
  return (
    <PatientDashboardLayout>
      <div className="patient-dashboard-layout">
        <div className="patient-dashboard1">
          <div className="patient-dashboard-title-stage">
            <div className="patient-dashboard-title">
              <h1>Hello Muh_Jumah</h1>
              <span>How are you feeling today</span>
            </div>
            <Button label="Book Appointment" mxWt="max-w-[9.5rem]"/>
          </div>
        </div>
        <div className="patient-dashboard2">
          
        </div>
      </div>
    </PatientDashboardLayout>
  );
};

export default PatientHome;
