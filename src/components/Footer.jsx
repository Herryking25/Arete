import React from 'react';

const Footer = () => {
  const linksGroup1 = [
    { label: 'Home', href: '#' },
    { label: 'Service', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Resources', href: '#' },
  ];

  const linksGroup2 = [
    { label: 'Our doctors', href: '#' },
    { label: 'Appointments', href: '#' },
    { label: 'Consultation', href: '#' },
    { label: 'Patients testimonies', href: '#' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'WhatsApp', href: '#' },
  ];

  return (
    <footer className="bg-black text-white text-muted-foreground py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* First Group of Links */}
        <div className="flex flex-col space-y-4">
          {linksGroup1.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>

        {/* Second Group of Links */}
        <div className="flex flex-col space-y-4">
          {linksGroup2.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col space-y-4">
          <span>Follow</span>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="hover:text-primary">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center mt-8 text-muted">
        <p>Copyright 2023 - King's Health | Designed by Rehoking & Nimipaul, Developed by Herryking</p>
      </div>
    </footer>
  );
};

export default Footer;
