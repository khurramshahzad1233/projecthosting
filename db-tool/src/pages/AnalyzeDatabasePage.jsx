import React, { useState } from "react";
import { Layout } from "../components/layouts/Layout";
import Container from "../components/ui/Container";
import StepWizard from "react-step-wizard";
import StepOne from "../components/steps/analyze-database/StepOne";
import StepTwo from "../components/steps/analyze-database/StepTwo";
import StepThree from "../components/steps/analyze-database/StepThree";
import StepLast from "../components/steps/analyze-database/StepLast";
import AnalyticInfo from "../components/steps/analyze-database/AnalyticInfo";

const AnalyzeDatabasePage = () => {
  const [information, setInformation] = useState(null);
  const [files, setFiles] = useState(null);
  const [analytic, setAnalytic] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <Layout>
      <section className="mt-24 bg-indigo-500 py-14">
        <Container>
          <h2 className="text-white text-3xl sm:text-4xl font-semibold capitalize text-center">
            Analyze Database
          </h2>
        </Container>
      </section>
      <section className="py-8">
        <Container>
          <div className="mx-auto max-w-4xl overflow-hidden bg-gray-50 p-4 rounded-lg">
            <StepWizard>
              <StepOne setInformation={setInformation} />
              <StepTwo setFiles={setFiles} />
              <AnalyticInfo setAnalytic={setAnalytic} />
              <StepThree setUserInfo={setUserInfo} />
              <StepLast
                information={information}
                files={files}
                analytic={analytic}
                userInfo={userInfo}
              />
            </StepWizard>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default AnalyzeDatabasePage;
