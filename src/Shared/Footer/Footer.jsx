import { Divider } from "antd";
import flagIcon from "../../../src/assets/bd-flag.png";
import { FacebookIcon, LinkedinIcon, PinterestIcon, XIcon } from "react-share";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Divider className=" my-16" />
      <div className=" px-4 md:px-6 lg:px-10 mx-auto max-w-7xl mb-12">
        <section className="md:flex items-center justify-between">
          <div>
            <div className=" border rounded-xl p-2 shadow-sm flex items-center justify-center gap-2">
              <div>
                <img
                  className=" w-7 h-auto mx-auto"
                  src={flagIcon}
                  alt="Bangladesh Flag"
                />
              </div>
              <div>
                <p>
                  Bangladesh . <span>Bangla</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            {/* Icons */}
            <div className=" flex items-center mt-8 md:mt-0 gap-8">
              <div className="flex items-center gap-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/96zoy?mibextid=ZbWKwL"
                >
                  <FacebookIcon className=" w-8 h-auto rounded-full" />
                </a>
                <a href="#">
                  <LinkedinIcon className=" w-8 h-auto rounded-full" />
                </a>
                <a href="#">
                  <PinterestIcon className=" w-8 h-auto rounded-full" />
                </a>
                <a href="#">
                  <XIcon className=" w-8 h-auto rounded-full" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="md:flex items-center gap-5 mt-8 font-medium text-gray-700">
            <p className=" font-bold">© 2023-{currentYear} হিলফুল ফুজুল</p>
            <ul className=" grid md:flex items-center gap-4 mt-4 md:mt-0">
              <li>
                <a href="#" className="hover:underline">
                  শর্তাবলী
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  গোপনীয়তা নীতি
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  আইনি তথ্য
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  অ্যাক্সেসযোগ্যতা বিবৃতি
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  কুকি নীতি
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
