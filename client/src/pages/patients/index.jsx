import React, { useState } from "react";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/Input";
import TextArea from "../../components/atoms/text-area";
import Modal from "../../components/molecules/Modal";
import PatientTable from "../../components/organisms/PatientTable";
import Select from "../../components/atoms/select";
import ScreenLayout from "../../templates/screen-layout";

const PatientsPage = () => {
  const [patientPayload, setPatientPayload] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phoneNo: "",
    nextOfKin: "",
    nextOfKinNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    age: "",
    bloodType: "",
    occupation: "",
    allergies: "",
    currentIllness: "",
    currentMedication: "",
    healthHistory: "",
  });
  const [addPatientStage, setAddPatientStage] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState("view");
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  const [gender, setGender] = useState("");
  const stages = ["General Info", "Health Info", "Medic Info"];
  const genders = ["male", "female"];
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setPatientPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleNextStage = () => {
    setAddPatientStage((prev) => prev + 1);
    if (addPatientStage === 2) return;
  };
  const handlePrevStage = () => {
    setAddPatientStage((prev) => prev - 1);
  };

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
          addPatientStage === 0 ? (
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
                      value={patientPayload.firstName}
                    />
                    <Input
                      label="Last Name"
                      placeholder="Enter your last name"
                      name="lastName"
                      onChange={handleInputField}
                      value={patientPayload.lastName}
                    />
                  </div>
                  {/* email address and phone number*/}

                  <div className="form-stage">
                    <Input
                      label="Email Address"
                      placeholder="Enter your email address"
                      name="email"
                      onChange={handleInputField}
                      value={patientPayload.email}
                    />
                    <Input
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      name="phoneNo"
                      onChange={handleInputField}
                      value={patientPayload.phoneNo}
                    />
                  </div>
                  {/* password and confirm password*/}

                  <div className="form-stage mb-6">
                    <Select
                      label="Gender"
                      placeholder="Please select your gender"
                      options={genders}
                      title={gender}
                      onClick={setGender}
                    />
                    <Input
                      label="Age"
                      placeholder="Type your age"
                      name="age"
                      onChange={handleInputField}
                      value={patientPayload.age}
                    />
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <TextArea
                    label="Address"
                    placeholder="Enter your current address"
                    name="address"
                    onChange={handleInputField}
                    value={patientPayload.address}
                  />
                </div>

                <div className="flex  justify-end ">
                  <Button
                    label="Next"
                    onClick={handleNextStage}
                    isDisabled={
                      !gender |
                      !patientPayload.age |
                      !patientPayload.firstName |
                      !patientPayload.lastName |
                      !patientPayload.email |
                      !patientPayload.phoneNo |
                      !patientPayload.address
                    }
                  />
                </div>
              </div>
            </form>
          ) : addPatientStage === 1 ? (
            <div className="form-stage-container pt-8">
              {/* gender and age*/}
              <div className="flex flex-col gap-y-12">
                {/* blood type and occupation*/}
                <div className="form-stage flex gap-8">
                  <Input
                    label="Blood Type"
                    placeholder="Enter your blood type"
                    name="bloodType"
                    value={patientPayload.bloodType}
                    onChange={handleInputField}
                  />
                  <Input
                    label="Occupation"
                    name="occupation"
                    value={patientPayload.occupation}
                    onChange={handleInputField}
                    placeholder="Enter your occupation"
                  />
                </div>
                {/* next of kin full name and next of kin phone number*/}
                <div className=" form-stage flex  gap-8 mb-6">
                  <Input
                    label="Next Of Kin Full Name"
                    placeholder="Enter the next of kin full name"
                    name="nextOfKin"
                    value={patientPayload.nextOfKin}
                    onChange={handleInputField}
                  />
                  <Input
                    label="Next of Kin Phone Number"
                    name="nextOfKinNumber"
                    value={patientPayload.nextOfKinNumber}
                    onChange={handleInputField}
                    placeholder="Enter the next of kin phone number"
                  />
                </div>
              </div>
              <div className="mt-4">
                <TextArea
                  label="Allergies"
                  name="allergies"
                  value={patientPayload.allergies}
                  onChange={handleInputField}
                  placeholder="Enter your allergies"
                  suffix='Please enter your allergies seperated by " , " '
                />
              </div>
              <div className="flex justify-between mt-12">
                <Button label="prev" onClick={handlePrevStage} />
                <Button
                  label="Next"
                  onClick={handleNextStage}
                  isDisabled={
                    !gender |
                    !patientPayload.age |
                    !patientPayload.occupation |
                    !patientPayload.bloodType |
                    !patientPayload.nextOfKin |
                    !patientPayload.nextOfKinNumber |
                    !patientPayload.allergies
                  }
                />
              </div>
            </div>
          ) : (
            <div className="w-full pt-6">
              <div className="flex flex-col gap-y-16">
                <TextArea
                  label="Current Illness"
                  name="currentIllness"
                  value={patientPayload.currentIllness}
                  onChange={handleInputField}
                  placeholder="Enter your current illness"
                  suffix='Please enter your current illness seperated by " , "'
                />

                <TextArea
                  label="Current Medication"
                  name="currentMedication"
                  value={patientPayload.currentMedication}
                  onChange={handleInputField}
                  placeholder="Enter your current medication"
                  suffix='Please enter your current medication seperated by " , "'
                />

                <TextArea
                  label="Health History"
                  name="healthHistory"
                  value={patientPayload.healthHistory}
                  onChange={handleInputField}
                  placeholder="Enter your health history"
                  suffix='Please enter your health history seperated by " , "'
                />
              </div>

              <div className="flex justify-between mt-12">
                <Button label="prev" onClick={handlePrevStage} />
                <Button
                  label="Create"
                  onClick={() => {
                    handleModal();
                    handleNextStage();
                  }}
                />
              </div>
            </div>
          )
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
            <div className="flex justify-end" onClick={handleModal}>
              <Button label="Close" />
            </div>
          </div>
        ) : null}
      </Modal>
    </ScreenLayout>
  );
};

export default PatientsPage;
