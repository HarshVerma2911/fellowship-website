import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white relative overflow-hidden">

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand & About */}
        <div>
          {/* Logo image placeholder */}
          <div className="mb-4">
            <a href="https://www.adoreglobal.org/#" target="_blank" rel="noreferrer">
              <img
                src="/images/logo2.jpeg" // 🔁 replace with your logo
                alt="ADORE Logo"
                className="h-12"
              />
            </a>
          </div>

          <p className="text-white/80 text-sm mb-6 leading-relaxed">
            ADORE is a global volunteer-driven community that brings together
            individuals who aspire to make a positive difference in society
            through small yet impactful actions. We believe that change begins
            with awareness, empathy, compassion and action.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <SocialIcon
              href="https://api.whatsapp.com/send/?phone=%2B917980460134&text&type=phone_number&app_absent=0"
              color="text-green-500"
              icon={<FaWhatsapp />}
              label="WhatsApp"
            />
            <SocialIcon
              href="https://www.facebook.com/adoreearth/"
              color="text-blue-600"
              icon={<FaFacebook />}
              label="Facebook"
            />
            <SocialIcon
              href="https://www.instagram.com/adoretheearth/"
              color="text-pink-500"
              icon={<FaInstagram />}
              label="Instagram"
            />
            <SocialIcon
              href="https://www.youtube.com/channel/UCnmuSy5FJ64zojXAP2P3ttQ/featured"
              color="text-red-500"
              icon={<FaYoutube />}
              label="YouTube"
            />
            <SocialIcon
              href="https://www.linkedin.com/company/adore-official/posts/?feedView=all"
              color="text-blue-400"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
          </div>
        </div>

        {/* About Links (UNCHANGED, now links) */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Fellowship</h4>
          <ul className="space-y-3 text-sm text-white/80">
            {/* <FooterLink text="Who We Are" href="#" /> */}
            <FooterLink text="Our Team" href="https://adoreglobal.org/team" />
            <FooterLink text="Programs" href="https://adoreglobal.org/upcomingworkshops" />
            <FooterLink text="Events & Activities" href="https://adoreglobal.org/activities" />
            <FooterLink text="Newsletter" href="https://adoreglobal.org/news_details" />
          </ul>
        </div>

        {/* Recent Activities */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Recent Activities</h4>

          {/* See activities link */}
          <a
            href="https://adoreglobal.org/activities"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm font-semibold text-orange-300 hover:underline"
          >
            See activities →
          </a>
        </div>

        {/* Keep In Touch */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Keep In Touch</h4>

          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-center gap-3">
              📞
              <a href="tel:+919876543210" className="hover:underline">
                +91 79804 60134
              </a>
            </li>
            <li className="flex items-center gap-3">
              ✉️
              <a
                href="mailto:hello@adoreglobal.org"
                className="hover:underline"
              >
                info@adoreglobal.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-indigo-800 text-center py-4 text-sm text-white/80">
        © {new Date().getFullYear()} ADORE — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

/* ----------------------------- */
/* Helper Components             */
/* ----------------------------- */

const FooterLink = ({ text, href }) => (
  <li>
    <a
      href={href}
      className="hover:text-white transition cursor-pointer"
    >
      › {text}
    </a>
  </li>
);

const RecentPost = ({ title, date }) => (
  <div>
    <p className="font-medium text-white">{title}</p>
    <p className="text-white/60 text-xs">{date}</p>
  </div>
);

const SocialIcon = ({ href, icon, color, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    title={label}
    className={`w-9 h-9 rounded-lg bg-white/20 hover:bg-white flex items-center justify-center text-lg transition ${color}`}
  >
    {icon}
  </a>
);
