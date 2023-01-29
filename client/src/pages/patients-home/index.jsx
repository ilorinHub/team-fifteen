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
            <Button label="Book Appointment" mxWt="max-w-[9.5rem]" />
          </div>
          <div className="patient-doctor-data">
            <div className="patient-data-template">
              <div className="doctor-image">
                <img src="/img/Frame 6872.webp" alt="Frame 6872" />
                <span>Your Doctor</span>
              </div>
              <div className="doctor-name">
                <img src="/img/Frame 6874.webp" alt="Frame 6874" />
                <div className="flex flex-col">
                  <span>Yusuf Muhammed</span>
                  <span>Cardiologist</span>
                </div>
                <img src="/img/Frame 6877.webp" alt="vector3" />
                <img src="/img/Frame 6878.webp" alt="vector4" />
              </div>
            </div>
            <div className="patient-data-template">
              <div className="doctor-image">
                <img src="/img/Frame 6879.webp" alt="Frame 6879" />
                <span>Your Data</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span>Weight</span>
                  <span>56kg</span>
                </div>
                <div className="flex flex-col">
                  <span>Height</span>
                  <span>72m</span>
                </div>
                <div className="flex flex-col">
                  <span>Blood Type</span>
                  <span>A+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="patient-report">
            <h2>Reports</h2>
            <div className="patient-info">
              

            </div>
          </div>
        </div>
        <div className="patient-dashboard2"></div>
      </div>
    </PatientDashboardLayout>
  );
};

export default PatientHome;
