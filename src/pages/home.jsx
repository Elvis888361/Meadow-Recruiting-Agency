import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/Picture1.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              ></Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Your number one international outsourcing and staffing firm for
                all your recruitment needs.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Company Values
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                We have a strong passion for our business, brand, and customers,
                and we are dedicated to serving our customers with the highest
                quality service.
                <br />
                We maintain a positive attitude in every situation, always
                expecting the best possible outcome, and approach our work with
                a 'can-do attitude'. Our commitment to professionalism and
                excellence is unwavering.
                <br />
                <br />
                we always act with integrity to earn and maintain our
                reputation.
                <br />
                We believe in the power of collaboration and teamwork,
                recognizing that by working together, we can achieve greater
                success and make a greater contribution.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/Picture4.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Company Values
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    We prioritize shared goals and mutual support, placing the
                    interests of the whole company above individual branches.
                    <br />
                    Innovation is a driving force in our organization, and we
                    strive to act with urgency, creativity, and flexibility.
                    <br />
                    We encourage questioning, participation, and
                    recommendation-making, and value leadership.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-48 pt-20">
        <PageTitle heading="OUR PRODUCTS"></PageTitle>
        <div className="flex flex-wrap">
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="/img/Picture5.png"
                alt="img-blur-shadow"
                layout="fill"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Reliable Expertise
              </Typography>
              <Typography>
                Our expertise lies in providing effective manpower solutions,
                specializing in the recruitment of skilled, semi skilled and
                unskilled workers. With us, you can be confident that you are
                working with a reliable and trustworthy partner who is commited
                to providing the best possible service.
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="/img/Picture6.png"
                alt="img-blur-shadow"
                layout="fill"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Tailored Excellence
              </Typography>
              <Typography>
                We understand that every organization is unique, which is why we
                offer high quality, individualy tailored services to meet the
                specific needs of government agencies, international and
                national organizations. Our goal is to provide top notch
                services that exceed our client's expectations, and we achieve
                this by taking the time to understand their requirements and
                delivering personalized solutions to meet their needs.
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="/img/Picture7.png"
                alt="img-blur-shadow"
                layout="fill"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Effortless Recruitment
              </Typography>
              <Typography>
                At Meadow Recruiting Agency, we provide an effortless way for
                organizations to access the best talent available. Our extensive
                network enables us to reach a broad audience, allowing us to
                meet the diverse recruitment needs oof any organization. At
                Meadow Recruiting Agency, we pride ourselves on recruiting and
                retaining only thehighest calibre of experienced employees witha
                proven track record of providing customer service.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <PageTitle heading="Why Choose Us?">
            We are dedicated to providing exceptional services that go beyond
            their expectations. We understand that every business is unique and
            has its own set of challenges and opportunities, which is why we
            provide individually tailored solutions to meet specific needs of
            our clients. We are commited to building long term relationships
            with our clients and strive to provide exceptional customer service
            and support throughout the recruitment and staffing process. Our
            goal is to help our clients achieve their workforce goals and grow
            their business by providing high quality recruitment solutions. We
            are passionate about bridging the gap between employees and
            employers globally, and we achieve this by deploying quality,
            qulaified and trained staff with the overall objective of meeting
            our clients' needs.
          </PageTitle>
        </div>
      </section>

      <section className="relative bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="CATEGORIES WE PROVIDE">
            We are dedicated to providing exceptional services that go beyond
            their expectations.
          </PageTitle>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            <Card
              color="transparent"
              className="text-center text-blue-gray-900"
            >
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2"
              >
                HEALTH CARE HOUSE KEEPING <br /> FRONT OFFICE <br/>PLANT OPERATORS
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                
              </Typography>
            </Card>
            <Card
              color="transparent"
              className="text-center text-blue-gray-900"
            >
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2"
              >
                IT PROFESSIONALS
                <br />
                SUPPLY CHAIN
                <br />
                MARKETING AND SALES
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                
              </Typography>
            </Card>
            <Card
              color="transparent"
              className="text-center text-blue-gray-900"
            >
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2"
              >
                SECURITY GUARDS
                <br />
                HOUSE KEEPERS
                <br />
                LABOURERS
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                
              </Typography>
            </Card>
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
