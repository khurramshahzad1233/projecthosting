import React from "react";
import Container from "../ui/Container";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const cards = [{}, {}, {}, {}];

const TestimonialSection = () => {
  return (
    <section>
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customer Success Stories
          </p>
          <p className="my-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            alias ipsum labore optio suscipit vel quas. Doloribus excepturi quod
            optio!
          </p>
        </div>
      </Container>
      <div className="relative isolate bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <Container>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <Swiper
              className="pb-14"
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{ delay: 4000 }}
              loop={true}
              pagination={{ clickable: true }}
            >
              {cards.map((item, index) => (
                <SwiperSlide key={`card-${index}`}>
                  <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                      <p>
                        “Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo expedita voluptas culpa sapiente alias
                        molestiae. Numquam corrupti in laborum sed rerum et
                        corporis.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <img
                        className="mx-auto h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-semibold text-gray-900">
                          Judith Black
                        </div>
                        <svg
                          viewBox="0 0 2 2"
                          width={3}
                          height={3}
                          aria-hidden="true"
                          className="fill-gray-900"
                        >
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        <div className="text-gray-600">CEO of Workcation</div>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default TestimonialSection;
