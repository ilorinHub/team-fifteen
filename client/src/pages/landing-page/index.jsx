import LandingPageNavBar from "../../components/organisms/landing-page-nav-bar";
import Hero from "../../components/organisms/Hero";
import Section2 from "../../components/organisms/HeroTwo";
import "./LandingPageStyle.scss";
import DonationSection from "../../components/organisms/donation-section";
import LandingPageBlogSection from "../../components/molecules/landing-page-update-section";
import Footer from "../../components/molecules/footer/Footer";
import Modal from "../../components/molecules/Modal";
import { useState } from "react";
import Select from "../../components/atoms/select";
import Input from "../../components/atoms/Input";
import TextArea from "../../components/atoms/text-area";
import Button from "../../components/atoms/button";
import BloodIcon from "../../components/atoms/vectors/BloodIcon";
import DonateIcon from "../../components/atoms/vectors/DonateIcon";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState("book");
  const [donationStage, setDonationStage] = useState("money");
  const [appointmentPayload, setAppointmentPayload] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    speciality: "",
    purpose: "",
    complain: "",
  });
  const [purpose, setPurpose] = useState("");
  const [speciality, setSpeciality] = useState("");
  const purposes = ["Consultation", "Checkout"];
  const specialities = [
    "Obstetrics and gynecology",
    "Surgery",
    "Pediatrics",
    "Diagnostic radiology",
    "Neurology",
    "Neurology",
    "Family medicine",
  ];

  const donationTypes = [
    {
      label: "Money",
      icon: <DonateIcon />,
      content: "Donate money to needy patients",
    },
    {
      label: "Blood",
      icon: <BloodIcon />,
      content: "Donate blood to patients",
    },
  ];

  const handleBookAppointment = () => {
    setModalType("book");
    setShowModal((prev) => !prev);
  };
  const handleDonation = () => {
    setModalType("donate");
    setShowModal((prev) => !prev);
  };

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setAppointmentPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <LandingPageNavBar />
      <div className="flex-1 overflow-auto scrollbar-hide">
        <Hero onClick={handleBookAppointment} />
        <Section2 />
        <DonationSection onClick={handleDonation} />
        <LandingPageBlogSection />
        <Footer />
      </div>
      <Modal
        modalTitle={
          modalType === "book" ? "Book an Appointment" : "Make your Donation"
        }
        handleCloseModal={setShowModal}
        closeModal={showModal}
      >
        {modalType === "book" ? (
          <form
            onClick={(e) => e.preventDefault()}
            className="appointment-form"
          >
            <div className="form-stage-container">
              <div className="flex flex-col gap-y-12">
                <div className="form-stage mt-6">
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handleInputField}
                    value={appointmentPayload.name}
                  />
                  <Input
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    name="phone"
                    onChange={handleInputField}
                    value={appointmentPayload.phone}
                  />
                </div>

                <div className="form-stage">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleInputField}
                    value={appointmentPayload.email}
                  />
                  <Input
                    label="Date"
                    type="date"
                    placeholder="Enter the date"
                    name="date"
                    onChange={handleInputField}
                    value={appointmentPayload.date}
                  />
                </div>
                <div className="form-stage mb-6">
                  <Select
                    label="Doctor Speciality"
                    placeholder=" Select doctor's speciality"
                    name="speciality"
                    onChange={handleInputField}
                    onClick={setSpeciality}
                    options={specialities}
                    title={speciality}
                    value={appointmentPayload.doctor}
                  />
                  <Select
                    label="Visit Purpose"
                    placeholder=" Select your purpose"
                    name="purpose"
                    onChange={handleInputField}
                    onClick={setPurpose}
                    options={purposes}
                    title={purpose}
                    value={appointmentPayload.purpose}
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <TextArea
                  label="Extra Information"
                  placeholder="Enter your information"
                  name="complain"
                  onChange={handleInputField}
                  value={appointmentPayload.complain}
                />
              </div>

              <div className="flex  justify-end ">
                <Button
                  label="Make Appointment"
                  mxWt="max-w-[35%]"
                  onClick={handleBookAppointment}
                />
              </div>
            </div>
          </form>
        ) : modalType === "donate" ? (
          <div className="donation-type-container">
            <h4 className="">
              Kindly Select the type of donation you want to make
            </h4>

            <div className="donation-type-selection">
              {donationTypes.map(({ icon, content, label }, i) => (
                <div
                  className="flex flex-col items-center gap-y-2 shadow max-w-[37%] mx-auto p-5 rounded-md cursor-pointer"
                  key={"donate-key" + label + i}
                >
                  <span className="h-8 w-8 grid place-content-center bg-[#F5F8FF] rounded-full">
                    {icon}
                  </span>
                  <span className="">{label}</span>
                  <p className="text-[#828282] text-center">{content}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
};

export default LandingPage;
