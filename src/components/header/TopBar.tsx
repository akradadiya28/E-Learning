import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

function Topbar() {
  return (
    <div className="hidden lg:block bg-[#120c3c] text-white py-2 text-sm">
      <div className=" mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side - Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-300" />
              <span className="text-gray-200">589 5th Ave, NY 10024, USA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-300" />
              <Link
                href="mailto:info@skillgrodemo.com"
                className="text-gray-200 hover:text-white transition-colors"
              >
                info@skillgrodemo.com
              </Link>
            </div>
          </div>

          {/* Right side - Phone and Social Media */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-300" />
              <Link
                href="tel:+12359989989"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Call us: +123 599 8989
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-gray-200">Follow Us On:</span>
              <div className="flex items-center space-x-2">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors p-1"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors p-1"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors p-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors p-1"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
