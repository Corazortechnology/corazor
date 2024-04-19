// import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="font-bold text-xl flex">
            {/* <LogoIcon /> */}
            SWYPEMATE
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Connect With Us</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              LinkedIn
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Twitter
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Facebook
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Services</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Card Management
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Financial Planning
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Offer Trading
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Blog
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Pricing
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Forums
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Events
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Webinars
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Built with passion by{" "}
          <a
            target="_blank"
            href="https://github.com/swypemate"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            SWYPEMATE Team
          </a>
        </h3>
      </section>
    </footer>
  );
};
