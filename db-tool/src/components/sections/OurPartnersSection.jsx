import React from "react";
import Container from "../ui/Container";

const OurPartnersSection = () => {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="https://www.hyperglance.com/wp-content/uploads/2023/03/healthdirect-logo-grey-230323.png.webp"
            alt="..."
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="https://www.hyperglance.com/wp-content/uploads/2023/03/usaf-logo-grey-230323.png.webp"
            alt="..."
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="https://www.hyperglance.com/wp-content/uploads/2023/03/gigamon-logo-grey-230323.png.webp"
            alt="..."
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://www.hyperglance.com/wp-content/uploads/2023/07/home-office-logo.png.webp"
            alt="..."
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://www.hyperglance.com/wp-content/uploads/2023/03/general-dynamics-logo-grey-230323.png.webp"
            alt="..."
            width={158}
            height={48}
          />
        </div>
      </Container>
    </section>
  );
};

export default OurPartnersSection;
