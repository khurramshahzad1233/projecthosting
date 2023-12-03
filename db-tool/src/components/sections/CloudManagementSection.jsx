import React from "react";
import Container from "../ui/Container";

const features = [
  {
    name: "Diagrams & Inventory",
    description:
      "Discover, explore, and export your aggregated multi-cloud inventory in real-time",
  },
  {
    name: "Security & Compliance",
    description:
      "Monitor continuously using hundreds of built-in checks based on key frameworks",
  },
  {
    name: "Cost Optimization",
    description:
      "Analyze your cloud costs, identify waste, and reduce your AWS & Azure bill",
  },
  {
    name: "Automation & Remediation",
    description:
      "An extensive library of automations to fix & optimize your cloud in real-time",
  },
];

const CloudManagementSection = () => {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cloud Management You Control
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover problems & opportunities, automate optimizations,
              remediation, reduce your bill, and save time spent on
              documentation.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <span className="text-white">0{index + 1}</span>
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CloudManagementSection;
