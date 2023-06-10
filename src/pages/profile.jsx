import { Avatar, Carousel, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { PageTitle } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="w-150 -mt-20">
                      <Avatar
                        src="/img/Picture8.png"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center"></div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      ></Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      ></Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      ></Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      ></Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      ></Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      ></Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  NANCY WANJIRU MUTUGU
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                    MEET THE CEO
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Meadow Recruiting Agency
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      My name is NancyWanjiruMutugu and I am the CEO of
                      MeadowRecruiting Agency. Our company is a licensed
                      recruitment firm that is passionate out bridging the gap
                      between employees and employers globally.We specialize in
                      proving complete manpower recruitment, outsourcing, and
                      training solutions to meet the specifiuc needs of
                      government agencies, international and national
                      organizations and businesses of all sizes.Iwould like to
                      take this opportunity to thank all our partners for doing
                      businesswith us. Your support and trust in our services
                      are greatly appreciated, andwe value our long term
                      relationshipswith each and everyone one of you. To all our
                      prospective clients,Iwould like to extend awarmwelcome and
                      invite you to experience the exceptional services that
                      MeadowRecruitment Agency has to offer.We are passionate
                      about helping businesses growand achieve theirworkforce
                      goals by providing top notch staffing services. Thank you
                      for choosingMEADOW ERECRUITMENT AGENCY as your recruitment
                      partner. We look forward toworkingwith you and building a
                      long lasting and mutually beneficial relationship.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <PageTitle heading="OUR STORY">
            Nancy is a passionate individual who has always been dedicated to
            serving her community. From a young age, she has volunteered her
            time and resources to help those in need. She has noticed a
            recurring issue in her community - unemployment - and feels strongly
            about it. To make a difference in her community, Nancy has started
            her own company, Meadows Recruiting Agency. The company is built on
            the foundation of mass recruitment and work placement. She is
            determined to connect job seekers with potential employers to reduce
            the unemployment rate in KENYA. Nancy has a wide range of experience
            in the recruitment industry, having worked for several years in
            various recruitment agencies. With her knowledge and experience, she
            is confident that she can make a significant impact in her
            community. Meadows Recruiting Agency quickly gained a reputation for
            providing quality services and helping to bridge the unemployment
            gap in the country. Nancy's passion for serving her community has
            driven her to start this company, and she is determined to make a
            difference in the lives of those around her. With her expertise and
            dedication to her cause, Nancy has created a company that is making
            a positive impact on her community.
          </PageTitle>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
