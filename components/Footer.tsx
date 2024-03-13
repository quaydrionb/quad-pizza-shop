import Image from "next/image";

const contact = "/assets/icons/telephone.svg";
const location = "/assets/icons/geo-alt.svg";
const calendar = "/assets/icons/calendar3.svg";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="container-fluid  py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
            <div className="col py-3">
              <h4 className="mb-4 fw-bolder ">
                {" "}
                <span>
                  <Image src={location} alt="location" width={30} height={30} />
                </span>{" "}
                Location
              </h4>
              <p>123 Pizza Square Cityville, FL 12345</p>
            </div>
            <div className="col py-3">
              <h4 className="mb-4 fw-bolder ">
                <span>
                  <Image src={contact} alt="phone" width={30} height={28} />
                </span>
                Contact Information
              </h4>
              <p>Email: info@quad-pizzeria.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div className="col py-3">
              <h4 className="mb-4 fw-bolder ">
                {" "}
                <span>
                  <Image src={calendar} alt="calendar" width={30} height={30} />
                </span>
                {"   "}
                Business Hours
              </h4>
              <p className="">Monday to Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday and Sunday: 12:00 PM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-text  text-center py-4">
        <p className="m-0 fw-bold ">© 2024 Quad Pizzeria, Inc</p>
      </div>
    </>
  );
};

export default Footer;
