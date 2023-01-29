import React, { useState } from "react";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/Input";
import TextArea from "../../components/atoms/text-area";
import Modal from "../../components/molecules/Modal";
import PatientTable from "../../components/organisms/PatientTable";
import Select from "../../components/atoms/select";
import ScreenLayout from "../../templates/screen-layout";

const PatientsPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState("view");
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleInputField = () => {};

  const handleAddModalType = (type) => {
    setModalType(type);
    setShowModal((prev) => !prev);
  };
  return (
    <ScreenLayout
      title="Patient"
      btnLabel="Add Patient"
      inputName="filterPatient"
      onClick={() => handleAddModalType("add")}
    >
      <PatientTable onClick={() => handleAddModalType("view")} />
      <Modal
        handleCloseModal={setShowModal}
        closeModal={showModal}
        modalTitle={
          modalType === "add"
            ? "Add New Patient Information"
            : "View Patient Information"
        }
      >
        {modalType === "add" ? (
          <form
            onClick={(e) => e.preventDefault()}
            className="appointment-form"
          >
            <div className="form-stage-container">
              {/* first name and last name*/}
              <div className="flex flex-col gap-y-12">
                <div className="form-stage mt-6">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                    name="firstName"
                    onChange={handleInputField}
                    // value={patientPayload.firstName}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Enter your last name"
                    name="lastName"
                    onChange={handleInputField}
                    // value={patientPayload.lastName}
                  />
                </div>
                {/* email address and phone number*/}

                <div className="form-stage">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleInputField}
                    // value={patientPayload.email}
                  />
                  <Input
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    name="phoneNo"
                    onChange={handleInputField}
                    // value={patientPayload.phoneNo}
                  />
                </div>
                {/* password and confirm password*/}

                <div className="form-stage mb-6">
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleInputField}
                    // value={patientPayload.password}
                  />
                  <Input
                    label="Confirm Password"
                    placeholder="Retype your password"
                    name="confirmPassword"
                    onChange={handleInputField}
                    // value={patientPayload.confirmPassword}
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <TextArea
                  label="Address"
                  placeholder="Enter your current address"
                  name="address"
                  onChange={handleInputField}
                  // value={patientPayload.address}
                />
              </div>

              <div className="flex  justify-end ">
                <Button label="Next" />
              </div>
            </div>
          </form>
        ) : modalType === "view" ? (
          <div className="form-stage-container">
            <div className="flex justify-between  gap-x-4">
              <div className="flex flex-col gap-y-1">
                <img src="/img/Frame.webp" alt="frame-img" />
                <span>Abdulhafiz Jimoh</span>
              </div>
              /*PSID, */
              <div className=" bg-[#F5F5F5] w-[25.3125rem] h-[7.9375rem] rounded-lg gap-x-8 py-2 px-6 gap-y-6">
                <div className="grid grid-cols-[1fr_1.5fr_1fr] items-center ">
                  <div className="flex flex-col gap-y-1 ">
                    <span>PSID</span>
                    <span className="font-extralight">PT-3212</span>
                  </div>
                  <div className="flex flex-col gap-y-1 ">
                    <span>Phone Number</span>
                    <span className="font-extralight">+23481904300981</span>
                  </div>
                  <div className="flex flex-col gap-y-1 ">
                    <span>Gender</span>
                    <span className="font-extralight">Female</span>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr_1fr] items-center">
                  <div className="flex flex-col gap-y-1 ">
                    <span>Age</span>
                    <span className="font-extralight">27 years old</span>
                  </div>
                  <div className="flex flex-col gap-y-1 ">
                    <span>Health State</span>
                    <span className="font-extralight">Receiving Treatment</span>
                  </div>
                  <div className="flex flex-col gap-y-1 ">
                    <span>Blood Type</span>
                    <span className="font-extralight">AB+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-6">
              <div className="flex flex-col gap-y-1">
                <span>Doctor In Change</span>
                <span>Dr Ajisafe</span>
              </div>
              <div className="flex flex-col gap-y-1 ">
                <span>Allergies</span>
                <span>Dust,Pollen,Animal Dander,Dust Mites and Mold</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-1 ">
              <span>Diagnosis</span>
              <span>
                Typhoid, Malaria, Athritis, Diabetes, Rheumatism, Hypertension
              </span>
            </div>
            <div className="flex flex-col gap-y-1 my-6">
              <span>Medical Conditions</span>
              <span>Chronic headache, Back ache, Whooping cough, Catarhh</span>
            </div>
            <div className="flex justify-end">
              <Button label="Close" />
            </div>
          </div>
        ) : null}
      </Modal>
    </ScreenLayout>
  );
};

export default PatientsPage;
