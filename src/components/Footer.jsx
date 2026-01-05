const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white relative overflow-hidden">
      
      {/* Subtle background pattern (optional placeholder) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/patterns/education-pattern.svg')",
          backgroundSize: "400px 400px",
        }}
      />

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">
              KF
            </div>
            <h3 className="text-xl font-semibold">Kids Fellowship</h3>
          </div>

          <p className="text-white/80 text-sm mb-6">
            A joyful and safe fellowship where children grow in faith,
            friendships, and values through meaningful activities.
          </p>

          <div className="flex gap-3">
            <SocialIcon label="Facebook" />
            <SocialIcon label="Instagram" />
            <SocialIcon label="Twitter" />
            <SocialIcon label="YouTube" />
          </div>
        </div>

        {/* About Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Fellowship</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <FooterLink text="Who We Are" />
            <FooterLink text="Our Mentors" />
            <FooterLink text="Programs" />
            <FooterLink text="Events & Activities" />
            <FooterLink text="Our Values" />
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Recent Activities</h4>

          <div className="space-y-4 text-sm">
            <RecentPost
              title="Storytelling & Games Day"
              date="Nov 19, 2024"
            />
            <RecentPost
              title="Creative Arts Workshop"
              date="Dec 5, 2024"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Keep In Touch</h4>

          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              📍
              <span>
                Community Center,<br />
                Kids Fellowship Street
              </span>
            </li>
            <li className="flex items-center gap-3">
              📞 <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              ✉️ <span>hello@kidsfellowship.org</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="bg-indigo-600 text-center py-4 text-sm text-white/80">
        © {new Date().getFullYear()} Kids Fellowship — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

/* ----------------------------- */
/* Helper Components             */
/* ----------------------------- */

const FooterLink = ({ text }) => (
  <li className="hover:text-white transition cursor-pointer">
    › {text}
  </li>
);

const RecentPost = ({ title, date }) => (
  <div>
    <p className="font-medium text-white">{title}</p>
    <p className="text-white/60 text-xs">{date}</p>
  </div>
);

const SocialIcon = ({ label }) => (
  <div
    className="w-9 h-9 rounded-lg bg-white/20 hover:bg-orange-500 flex items-center justify-center text-sm cursor-pointer transition"
    title={label}
  >
    {label[0]}
  </div>
);
