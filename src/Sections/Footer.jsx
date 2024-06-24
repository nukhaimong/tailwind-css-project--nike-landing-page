import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <section className="max-container">
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="footerLogo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for new term at your nearest Nike Store. Find your
            perfact size In Store. Get rewards.
          </p>
          <div className="flex items-center gap-6 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-2xl font-montserrat font-medium text-white mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 font-montserrat text-base leading-norma text-white-400 hover:text-slate-gray"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyrightSign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserve</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Condition</p>
      </div>
    </section>
  );
};

export default Footer;
