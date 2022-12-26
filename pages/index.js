import Head from "next/head";
import Image from "next/image";
import CTAButton from "../components/CTAButton";
import FAQCard from "../components/FAQCard";
import Navbar from "../components/Navbar";
import RoadMapPahse from "../components/RoadMapPahse";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#111827] grid lg:grid-cols-12 gap-4 pt-5 lg:pt-0  lg:pl-48 text-center lg:text-left">
        <div className="lg:col-span-6 my-auto ">
          <div className=" text-4xl lg:leading-normal lg:text-6xl font-black text-white">
            <p>Experience</p> <p>the Power of Digital</p>{" "}
            <p>
              <span className="bg-clip-text bg-gradient-to-r text-transparent from-[#5ED3D0] to-[#8750F3]">
                Business
              </span>{" "}
              Profiles!
            </p>
          </div>
          <p className="mt-5 text-[16px] lg:text-[24px] text-white">
            And discover the added perks.
          </p>
          <CTAButton text="Get Started for free"></CTAButton>
        </div>
        <img src="/images/header-img.png" className="  lg:col-span-6 " />
      </div>

      <div className="bg-[#111827] grid lg:grid-cols-12 gap-4 pt-5 py-5 lg:py-10  lg:pl-48 text-center lg:text-left">
        <div class="parent lg:col-span-5">
          <img src="/images/phone2.png" className=" image1  w-full " />
          <img src="/images/phone.png" className=" image2 w-full " />
        </div>
        <div className="lg:col-span-5 my-auto ">
          <div className=" text-4xl lg:leading-normal lg:text-3xl font-black text-white">
            Create your personal or business profile in less than two minutes.
          </div>
          <p className="mt-5 text-[16px] lg:text-lg text-white">
            Create a profile for free and start enjoying a range of benefits!
            Our platform provides a social network exclusively for users, giving
            you the opportunity to connect with like-minded professionals end
            expand your network. You will also be able to access exclusive
            discounts on selected products.{" "}
          </p>
          <CTAButton text="Get Started for free"></CTAButton>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#5ED3D0] to-[#89A2FB] ">
        <div className="py-16">
          <div className="w-5/6 rounded-lg lg:w-1/2 bg-[#221F2C] mx-auto py-10">
            <p className="text-2xl lg:text-3xl text-center text-white font-extrabold">
              Get an NFC card and link it to your profile. We plant a tree for
              each card!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#380036] to-[#0CBABA] grid lg:grid-cols-12 gap-4 pt-5 py-5 lg:py-10  lg:pl-48 text-center lg:text-left">
        <div className="lg:col-span-5 my-auto ">
          <div className=" text-4xl lg:leading-normal lg:text-3xl font-black text-white">
            Experience effortless team management.
          </div>
          <p className="mt-5 text-[16px] lg:text-lg text-white">
            Make managing your team easier than ever with one dashboard - all in
            one place! Discover our white label CRM system for teams and
            companies that includes powerful statistics and social network
            capabilities. Customize features to fit the specific needs of your
            team. This offers the flexibility and convenience of a powerful CRM
            system without having to build it from scratch.
          </p>
          <CTAButton text="Get Started"></CTAButton>
        </div>
        <img
          src="/images/team-management.png"
          className="lg:col-span-5  w-full "
        />
      </div>

      <div className="bg-[#221F2C] pt-5 py-5 lg:py-10">
        <h2 className=" text-4xl lg:leading-normal lg:text-3xl text-center font-black text-white">
          Go further - get an NFT that gives you up to 300% per year!
        </h2>

        <div className=" grid lg:grid-cols-12 gap-4   lg:pl-48 text-center lg:text-left">
          <img src="/images/wood-man.png" className="lg:col-span-5  w-full " />
          <div className="lg:col-span-5 my-auto ">
            <p className="mt-5 text-[16px] lg:text-lg text-white">
              Discover our NFT collection designed to provide up to 1000% return
              on your investment annually. With NFTs, you can experience true
              ownership of digital assets and have the opportunity to maximize
              your profits with referrals. Have some fun and laverage on the
              potential of NFTs!
            </p>
            <CTAButton text="Learn more"></CTAButton>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0D324D] to-[#7F5A83]">
        <div className=" py-16">
          <h2 className="text-center text-white text-4xl lg:text-3xl font-black pb-16">
            Roadmap
          </h2>
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5 justify-items-center lg:px-10 content-center  ">
            <RoadMapPahse title="Q1" color="bg-[#7EFFC1]"></RoadMapPahse>
            <RoadMapPahse title="Q2" color="bg-[#FFAA5B]"></RoadMapPahse>
            <RoadMapPahse title="Q3" color="bg-[#A689FB]"></RoadMapPahse>
            <RoadMapPahse title="Q4" color="bg-[#FDEC58]"></RoadMapPahse>
            <RoadMapPahse title="Q5" color="bg-[#638FFF]"></RoadMapPahse>
          </div>
        </div>
      </div>

      <div class="bg-[#111827]">
        <div class="container max-w-4xl px-6 py-10 mx-auto">
          <h2 class="text-3xl font-semibold text-center lg:text-4xl text-white">
            FAQ
          </h2>

          <div class="mt-12 space-y-8">
            <FAQCard
              question="Question 1"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              isOpened=""
            ></FAQCard>
            <FAQCard
              question="Question 2"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              isOpened=""
            ></FAQCard>
            <FAQCard
              question="Question 3"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              isOpened=""
            ></FAQCard>
          </div>
        </div>
      </div>

      <section class="bg-gradient-radial from-[#5ED3D0] via-[#458b87] to-[#221F2C]">
        <div class="container px-6 py-12 mx-auto">
          <h2 class="text-3xl font-semibold text-center lg:text-4xl text-white">
            Contact us
          </h2>
          <div class="mt-8  lg:mx-6">
            <div class="w-full px-8 py-10 mx-auto overflow-hidden  rounded-lg shadow-2xl bg-[#28313D] lg:max-w-xl  shadow-black/50">
              <form>
                <div class="flex-1">
                  <input
                    type="text"
                    placeholder="Your Name/company"
                    class="block w-full px-5 py-3 mt-2  border  rounded-md placeholder-gray-600 bg-[#28313D] text-gray-300 border-gray-700 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 mt-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    class="block w-full px-5 py-3 mt-2  border  rounded-md placeholder-gray-600 bg-[#28313D] text-gray-300 border-gray-700 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="w-full mt-6">
                  <textarea
                    class="block w-full h-32 px-5 py-3 mt-2  border  rounded-md md:h-48 placeholder-gray-600 bg-[#28313D] text-gray-300 border-gray-700  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#5ED3D0] to-[#89A2FB] rounded-md hover:bg-[#89A2FB] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-[#111827]">
        <div class="container p-6 mx-auto">
          <div class="lg:flex">
            <div class="mt-6 lg:mt-0 lg:flex-1">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 class=" uppercase text-white">Language</h3>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-600 text-gray-400 hover:underline"
                  >
                    English
                  </a>
                </div>

                <div>
                  <h3 class=" uppercase text-white">GPM Products</h3>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-600 text-gray-400 hover:underline"
                  >
                    GPM Link
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-600 text-gray-400 hover:underline"
                  >
                    GPM for Businesses and Teams
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-600 text-gray-400 hover:underline"
                  >
                    GPM Mall
                  </a>{" "}
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-600 text-gray-400 hover:underline"
                  >
                    GPM Travel
                  </a>{" "}
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-600 text-gray-400 hover:underline"
                  >
                    GPM Token
                  </a>
                </div>

                <div>
                  <h3 class=" uppercase text-white">Trust & Legal</h3>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-600 text-gray-400 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-600 text-gray-400 hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </div>

                <div>
                  <h3 class=" uppercase text-white">App</h3>
                </div>
              </div>
            </div>
          </div>

          <hr class="h-px my-6 bg-gray-200 border-none bg-gray-700" />

          <div>
            <p class="text-center text-gray-500 text-gray-400">
              © GPM 2022 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
