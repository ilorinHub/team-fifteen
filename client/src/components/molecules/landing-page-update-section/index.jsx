import BookingIcon from "../../atoms/vectors/BookingIcon";

import "./LandingPageUpdateSection.scss";

const LandingPageSectionUpdate = () => {
  const recentUpdatesData = [
    {
      imgUrl: "/img/drug-img.webp",
      title: "Effects of drugs abuse",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimaasperiores distinctio voluptates.",
    },
    {
      imgUrl: "/img/heart-img.webp",
      title: "Effects of drugs abuse",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimaasperiores distinctio voluptates.",
    },
    {
      imgUrl: "/img/vaccine-img.webp",
      title: "Post covid effect",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimaasperiores distinctio voluptates.",
    },
    {
      imgUrl: "/img/drug-img.webp",
      title: "Effects of drugs abuse",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimaasperiores distinctio voluptates.",
    },
  ];
  return (
    <div className="landing-page-section-container">
      <h3>Recent News and Updates</h3>
      <div className="card-container">
        {recentUpdatesData.map(({ content, imgUrl, title }, i) => (
          <div
            key={"landing-page-card-section" + i + title}
            className="landing-page-card"
          >
            <div className="h-full">
              <img
                src={imgUrl}
                alt={`${title} image`}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="card-content">
              <h3>{title}</h3>
              <p>{content}</p>
              <div className="flex items-center gap-x-2 mt-2">
                <BookingIcon color="#828282" /> <span>January 1st, 2023</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPageSectionUpdate;
