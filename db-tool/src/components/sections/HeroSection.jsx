import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const HeroSection = () => {
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <Container>
          <div className="py-10 md:py-20">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <div className="block lg:hidden mb-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mb-16 lg:mb-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-20">
                <video
                  poster="/assets/images/hero-image.jpg"
                  className="h-full w-full object-cover rounded-3xl"
                  src="/assets/images/hero-video.mp4"
                  autoPlay
                  muted
                  loop
                />
              </div>
              <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-gray-900 sm:leading-tight sm:text-6xl lg:col-span-2 xl:col-auto">
                Insights Visualized <br /> into Action
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Built by cloud professionals, for cloud professionals, this is
                  cloud management as you've never experienced it.
                </p>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Save money, reduce risk, automate tasks, and stay compliant
                  thanks to round-the-clock cloud optimization mixed with
                  powerful & interactive inventory visualizations.
                </p>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  The result? Peace of mind for you and your cloud team (not to
                  mention Finance, Compliance & InfoSec).
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/analyze-database"
                    className="flex items-center gap-2 rounded-md px-8 py-3 text-xl text-white font-semibold btn-primary"
                  >
                    <span>Analyze Database</span>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-20">
                <video
                  poster="/assets/images/hero-image.jpg"
                  className="h-full w-full object-cover rounded-3xl"
                  src="/assets/images/hero-video.mp4"
                  autoPlay
                  muted
                  loop
                />
              </div>
              {/* <img
                src="/assets/images/hero-image.jpg"
                alt=".."
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-20"
              /> */}
            </div>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </section>
  );
};

export default HeroSection;
