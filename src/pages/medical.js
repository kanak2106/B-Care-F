import { useState, useEffect } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Medical = () => {
  const [groupDateTimePickerValue, setGroupDateTimePickerValue] =
    useState(null);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className="relative bg-lavenderblush w-full h-[319.69rem] overflow-hidden text-left text-[0.94rem] text-black font-poppins [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] lg:opacity-[0]"
        data-animate-on-scroll
      >
        <footer className="absolute top-[289.56rem] left-[0rem] bg-gray-300 w-[110rem] h-[30.13rem]" />
        <div className="absolute top-[0rem] left-[-0.94rem] w-[90.94rem] h-[107.94rem] text-[1.5rem] font-open-sans">
          <img
            className="absolute top-[0rem] left-[0.94rem] w-[98rem] h-[59.44rem] object-cover"
            alt=""
            src="/hero-image@2x.png"
          />
          <div className="absolute top-[11.06rem] left-[8.75rem] w-[37.83rem] h-[42.62rem]">
            <b className="absolute top-[-4.33rem] left-[7.71rem] text-[9.38rem] hidden font-roboto-condensed text-light-background-color w-[56.02rem] h-[28.04rem]">
              <p className="m-0">{`BEAUTIFUL `}</p>
              <p className="m-0">SMILES</p>
            </b>
            <div className="absolute top-[0rem] left-[0rem] text-[3.13rem] tracking-[0.1em] leading-[3.75rem] font-dm-serif-display inline-block w-[34.88rem] h-[10.25rem]">
              <p className="m-0">DIAGONOSE.</p>
              <p className="m-0">RECOVER.</p>
              <p className="m-0">REGENERATE</p>
            </div>
            <div className="absolute top-[22.35rem] left-[4.16rem] w-[32.63rem] h-[2.63rem] hidden">
              <img
                className="absolute top-[0.4rem] left-[0rem] w-[1.9rem] h-[1.92rem]"
                alt=""
                src="/group-2811.svg"
              />
              <b className="absolute top-[0rem] left-[2.73rem] inline-block w-[29.91rem] h-[2.63rem]">
                Only From £ 99/week
              </b>
            </div>
            <b className="absolute top-[13rem] left-[0rem] inline-block w-[35.63rem] h-[5.69rem]">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </b>
            <div className="absolute top-[29.88rem] left-[2.22rem] text-[1.13rem] leading-[2.5rem] inline-block w-[35.61rem] h-[12.74rem]">
              <p className="m-0">Completed in 1 Night Stay</p>
              <p className="m-0">Pain-Free in 1 Week</p>
              <p className="m-0">Walking on Day 1</p>
              <p className="m-0">Driving in 7 Days</p>
            </div>
            <img
              className="absolute top-[30.85rem] left-[-0.06rem] w-[1.14rem] h-[7.77rem]"
              alt=""
              src="/group-701.svg"
            />
            <div className="absolute top-[21.25rem] left-[0rem] w-[15.25rem] h-[6.06rem] text-[1.25rem] text-light-background-color">
              <div className="absolute top-[0rem] left-[0rem] rounded-3xs [background:linear-gradient(90deg,_#e3008d,_#fba9d8_48.46%,_#ec52b2)] w-[15.25rem] h-[6.06rem]" />
              <b className="absolute top-[2.31rem] left-[2rem] tracking-[0.1em] capitalize inline-block w-[10.25rem] h-[1.25rem]">
                GET STARTED
              </b>
              <img
                className="absolute top-[2.81rem] left-[12.06rem] w-[0.21rem] h-[0.63rem]"
                alt=""
                src="/vector11.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[55.19rem] left-[0.94rem] w-[98rem] h-[53.69rem] object-cover"
            alt=""
            src="/unsplashlyvqm-wyxjk@2x.png"
          />
        </div>
        <div className="absolute top-[67.31rem] left-[4.56rem] w-[24.81rem] h-[24.5rem] text-[1.41rem] text-light-background-color">
          <div className="absolute top-[0rem] left-[2 rem] rounded-[9.42px] bg-hotpink-200 w-[24.81rem] h-[24.5rem]" />
          <img
            className="absolute top-[2.57rem] left-[10.63rem] w-[3.6rem] h-[4.25rem] overflow-hidden"
            alt=""
            src="/healthiconsnurseoutline.svg"
          />
          <div className="absolute top-[7.56rem] left-[8.63rem] font-semibold inline-block w-[12.23rem] h-[1.94rem]">
            Self Check
          </div>
          <p className="m-0 absolute top-[10.31rem] left-[2.55rem] leading-[203%] text-center inline-block w-[20.55rem] h-[8.79rem] text-[1.25rem]">
            <span>
              Know your body better by checking your breasts yourself at home
            </span>
            <span className="text-[1.13rem]">.</span>
          </p>
        </div>
        <div className="absolute top-[67.31rem] left-[33.03rem] w-[24.81rem] h-[24.5rem] hidden text-[1.41rem] text-darkslategray-200">
          <div className="absolute top-[0rem] left-[0rem] rounded-[9.42px] bg-light-background-color w-[24.81rem] h-[24.5rem]" />
          <div className="absolute top-[7.4rem] left-[6.16rem] font-semibold inline-block w-[12.23rem] h-[1.94rem]">
            Operation Theatre
          </div>
          <div className="absolute top-[10.31rem] left-[2.32rem] text-[1.13rem] leading-[203%] text-center inline-block w-[20.55rem] h-[8.79rem]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique auctos, um viton aeeget massa. Felis scelerisque dolor phasellus `}</div>
          <img
            className="absolute top-[2.18rem] left-[10.57rem] w-[4.07rem] h-[4.25rem] overflow-hidden"
            alt=""
            src="/medicaliconisurgery.svg"
          />
        </div>
        <div className="absolute top-[67.31rem] left-[59.69rem] w-[24.81rem] h-[24.5rem] text-[1.13rem] text-darkslategray-200">
          <div className="absolute top-[0rem] left-[3rem] rounded-[9.42px] bg-light-background-color w-[24.81rem] h-[24.5rem]" />
          <div className="absolute top-[7.56rem] left-[8.87rem] text-[1.41rem] font-semibold inline-block w-[18.94rem] h-[4.31rem]">
            {" "}
            Regeneration Aid
          </div>
          <div className="absolute top-[11.88rem] left-[4.87rem] leading-[203%] text-center inline-block w-[20.56rem] h-[7.25rem]">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <img
            className="absolute top-[2.55rem] left-[13.57rem] w-[4.07rem] h-[4.25rem] overflow-hidden"
            alt=""
            src="/healthiconsdoctormaleoutline.svg"
          />
          <button className="cursor-pointer p-0 bg-[transparent] absolute top-[19.94rem] left-[9.37rem] rounded-3xs [background:linear-gradient(90deg,_#ef58b4,_#faa4d6_48.46%,_#ed57b4)] shadow-[0px_4px_40px_rgba(177,_146,_65,_0.6)] box-border w-[12.44rem] h-[2.88rem] border-[1px] border-solid border-light-background-color" />
          <div className="absolute top-[20.56rem] left-[8.24rem] w-[9rem] h-[1.56rem] text-light-background-color font-open-sans">
            <b className="relative top-[0rem] left-[3.5rem] tracking-[.1em] capitalize">
              CHECK NOW
            </b>
            <img
              className="absolute top-[0.31rem] left-[10.5rem] w-[0.5rem] h-[0.88rem]"
              alt=""
              src="/vector111.svg"
            />
          </div>
        </div>
        <nav className="absolute top-[0.69rem] left-[34.75rem] w-[53.69rem] h-[3.31rem]">
          <button className="cursor-pointer [border:none] p-0 bg-deeppink absolute top-[0.38rem] left-[44.5rem] w-[8.5rem] h-[2.94rem]" />
          <b className="absolute top-[1rem] left-[18.13rem] text-[1.13rem] font-poppins text-gray-200 text-left">
            About us
          </b>
          <b className="absolute top-[1rem] left-[12.19rem] text-[1.13rem] font-poppins text-mediumvioletred text-left">
            Home
          </b>
          <b className="absolute top-[0.95rem] left-[39.14rem] text-[1.13rem] font-poppins text-gray-200 text-left">
            Login
          </b>
          <b className="absolute top-[1rem] left-[46.44rem] text-[1.13rem] font-poppins text-light-background-color text-left">
            Sign Up
          </b>
          <b className="absolute top-[1rem] left-[26.63rem] text-[1.13rem] font-poppins text-gray-200 text-left">
            User
          </b>
          <b className="absolute top-[1rem] left-[32.44rem] text-[1.13rem] font-poppins text-gray-200 text-left">{`Doctor `}</b>
        </nav>
        <img
          className="absolute top-[0.69rem] left-[1.31rem] w-[6.5rem] h-[6.13rem] object-cover"
          alt=""
          src="/whatsapp-image-20230406-at-1940-1@2x.png"
        />
        <div className="absolute top-[301.75rem] left-[11.44rem] leading-[1.5rem] text-justify inline-block w-[19.06rem]">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
        <div className="absolute top-[309.38rem] left-[18rem] w-[2.56rem] h-[2.56rem] text-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-gray-300 w-[2.56rem] h-[2.56rem]" />
          <b className="absolute top-[0.56rem] left-[0.81rem] [background:linear-gradient(180deg,_#6eace2,_#5a9ad2_99.98%,_rgba(16,_28,_38,_0.18)_99.99%,_rgba(0,_0,_0,_0),_#1a72bf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            in
          </b>
        </div>
        <b className="absolute top-[297.44rem] left-[36.81rem] text-[1.13rem]">
          Company
        </b>
        <b className="absolute top-[297.44rem] left-[53.25rem] text-[1.13rem]">
          Support
        </b>
        <b className="absolute top-[297.44rem] left-[68.88rem] text-[1.13rem]">
          Contact
        </b>
        <div className="absolute top-[304.31rem] left-[36.81rem]">About Us</div>
        <div className="absolute top-[301.81rem] left-[36.81rem]">Home</div>
        <div className="absolute top-[306.81rem] left-[36.81rem]">user</div>
        <div className="absolute top-[309.31rem] left-[36.81rem]">{`Doctor `}</div>
        <div className="absolute top-[311.81rem] left-[36.81rem]">
          Terms of Use
        </div>
        <div className="absolute top-[301.81rem] left-[53.25rem]">
          Support Center
        </div>
        <div className="absolute top-[301.81rem] left-[68.88rem]">
          +1826535375535
        </div>
        <div className="absolute top-[304.13rem] left-[68.88rem]">
          +1843228662422
        </div>
        <div className="absolute top-[306.81rem] left-[68.88rem]">
          call@Bcarehealth.com
        </div>
        <div className="absolute top-[304.31rem] left-[53.25rem]">
          24x7 Service
        </div>
        <div className="absolute top-[306.81rem] left-[53.25rem]">
          Quick Chat
        </div>
        <img
          className="absolute top-[268.81rem] left-[6.63rem] rounded-md w-[76.75rem] h-[15.25rem] object-cover"
          alt=""
          src="/rectangle-32@2x.png"
        />
        <div className="absolute top-[268.81rem] left-[6.63rem] rounded-md bg-plum-200 w-[76.75rem] h-[15.25rem]" />
        <div className="absolute top-[249.56rem] left-[32.75rem] rounded-md bg-plum-100 w-[24.5rem] h-[15.25rem]" />
        <div className="absolute top-[249.56rem] left-[58.88rem] rounded-md bg-plum-100 w-[24.5rem] h-[15.25rem]" />
        <div className="absolute top-[249.56rem] left-[6.63rem] rounded-md bg-plum-100 w-[24.5rem] h-[15.25rem]" />
        <img
          className="absolute top-[251.81rem] left-[43.06rem] w-[3.88rem] h-[4.06rem]"
          alt=""
          src="/ellipse-18.svg"
        />
        <img
          className="absolute top-[251.81rem] left-[69.19rem] w-[3.88rem] h-[4.06rem]"
          alt=""
          src="/ellipse-18.svg"
        />
        <img
          className="absolute top-[251.81rem] left-[16.94rem] w-[3.88rem] h-[4.06rem]"
          alt=""
          src="/ellipse-18.svg"
        />
        <b className="absolute top-[241rem] left-[32.06rem] text-[3.44rem] leading-[4rem] flex text-gray-100 text-center items-center justify-center w-[27.88rem] h-[3.69rem]">
          The Destination
        </b>
        <div className="absolute top-[272rem] left-[8.56rem] text-[3.13rem] leading-[4.06rem] capitalize text-light-background-color flex items-center w-[59.88rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Breast Cancer changes you.</p>
            <p className="m-0">and the change can be beautiful .</p>
          </span>
        </div>
        <b className="absolute top-[238.5rem] left-[40.56rem] text-[1.25rem] leading-[1.25rem] flex text-deeppink text-center items-center justify-center w-[9.44rem]">
          Come Visit Us
        </b>
        <b className="absolute top-[256.56rem] left-[39.25rem] text-[1.5rem] leading-[1.25rem] flex text-center items-center justify-center w-[11.56rem] h-[1.19rem]">
          Contact Hours
        </b>
        <b className="absolute top-[256.81rem] left-[62.5rem] text-[1.5rem] leading-[1.25rem] flex text-center items-center justify-center w-[17.31rem] h-[1.19rem]">
          Phone Number
        </b>
        <b className="absolute top-[256.88rem] left-[11.44rem] text-[1.5rem] leading-[1.25rem] flex text-center items-center justify-center w-[14.38rem] h-[1.19rem]">
          Location Address
        </b>
        <div className="absolute top-[259.31rem] left-[34.38rem] text-[1rem] leading-[1.25rem] flex items-center w-[9rem] h-[1.13rem]">
          Mon 8:00 am - 5:00 pm
        </div>
        <div className="absolute top-[259.31rem] left-[46.5rem] text-[1rem] leading-[1.25rem] flex items-center w-[9.13rem] h-[1.13rem]">
          Tues 8:00 am - 5:00 pm
        </div>
        <div className="absolute top-[259.31rem] left-[68.44rem] text-[1rem] leading-[1.25rem] text-center flex items-center justify-center w-[5.44rem] h-[1.13rem]">
          +1 23 45 6789
        </div>
        <div className="absolute top-[259.31rem] left-[10.81rem] text-[1rem] leading-[1.25rem] text-center flex items-center justify-center w-[16.13rem] h-[1.13rem]">
          121 King Street Melbourne, 3000, Australia
        </div>
        <img
          className="absolute top-[252.81rem] left-[17.94rem] w-[1.94rem] h-[2rem] overflow-hidden"
          alt=""
          src="/locationsvgrepocom-3.svg"
        />
        <img
          className="absolute top-[252.81rem] left-[44.06rem] w-[1.94rem] h-[2rem] overflow-hidden"
          alt=""
          src="/clocksvgrepocom-1.svg"
        />
        <img
          className="absolute top-[252.81rem] left-[70.19rem] w-[1.94rem] h-[2rem] overflow-hidden"
          alt=""
          src="/phonesvgrepocom-1.svg"
        />
        <button className="cursor-pointer py-[0.94rem] px-[5rem] bg-[transparent] absolute top-[274.81rem] left-[63.38rem] rounded-md box-border w-[12.94rem] h-[3.19rem] flex flex-row items-start justify-start border-[1px] border-solid border-light-background-color">
          <b className="relative text-[1rem] leading-[1.63rem] font-poppins text-light-background-color text-left">
            Free Exam
          </b>
        </button>
        <img
          className="absolute top-[191.69rem] left-[1.13rem] w-[28.13rem] h-[41.31rem] object-cover"
          alt=""
          src="/rectangle-21@2x.png"
        />
        <img
          className="absolute top-[194.63rem] left-[31.13rem] w-[15.63rem] h-[22.13rem] object-cover"
          alt=""
          src="/rectangle-22@2x.png"
        />
        <img
          className="absolute top-[218.63rem] left-[31.13rem] w-[15.63rem] h-[14.38rem] object-cover"
          alt=""
          src="/rectangle-23@2x.png"
        />
        <i className="absolute top-[201.38rem] left-[50.5rem] text-[3.44rem] leading-[4rem] font-dm-serif-display text-gray-100">
          What We Do
        </i>
        <i className="absolute top-[198.25rem] left-[50.5rem] text-[1.25rem] leading-[1.25rem] font-dm-serif-display text-deeppink">
          How We Help
        </i>
        <div className="absolute top-[212.63rem] left-[50.5rem] text-[1rem] leading-[1.75rem] font-proxima-nova text-dimgray-200 inline-block w-[37.5rem] h-[8.38rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does a
          eiusmod tempor. There are many variations of passages of available but
          majority have suffered alteration in some form, by humour or
          randomised words which don't look even believable. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed does a eiusmod tempor.
          There are many variations of passage.
        </div>
        <button className="cursor-pointer py-[0.94rem] px-[1.25rem] bg-[transparent] absolute top-[226.81rem] left-[50.31rem] rounded-md flex flex-row items-start justify-start border-[1px] border-solid border-deeppink">
          <i className="relative text-[1rem] leading-[1.63rem] font-dm-serif-display text-deeppink text-left">
            Learn More
          </i>
        </button>
        <div className="absolute top-[207.88rem] left-[50.5rem]">
          <DatePicker
            label="Braces"
            value={groupDateTimePickerValue}
            onChange={(newValue) => {
              setGroupDateTimePickerValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                variant="standard"
                size="medium"
                renderInput={{ placeholder: "Invisalign" }}
                helperText="Other"
              />
            )}
          />
        </div>
        <div className="absolute top-[210.72rem] left-[50.47rem] box-border w-[39rem] h-[0.06rem] border-t-[1px] border-solid border-whitesmoke-300" />
        <div className="absolute top-[210.72rem] left-[50.47rem] box-border w-[3.94rem] h-[0.06rem] border-t-[1px] border-solid border-deeppink" />
        <div className="absolute top-[115.63rem] left-[6.75rem] w-[74.06rem] h-[38.63rem] text-[1.19rem] text-light-background-color">
          <div className="absolute top-[0rem] left-[0rem] bg-steelblue w-[74.06rem] h-[38.63rem]" />
          <div className="absolute top-[0rem] left-[0rem] bg-hotpink-200 w-[74.44rem] h-[38.63rem]" />
          <b className="absolute top-[2.63rem] left-[3.38rem] text-[2.56rem] inline-block w-[35.56rem] h-[14.63rem]">
            Health always begins with a healthy life style. Being healthy will
            makes you happier.
          </b>
          <b className="absolute top-[23rem] left-[9.56rem] text-[1.5rem] inline-block w-[29.21rem]">
            Keep Your Health Record On Track
          </b>
          <b className="absolute top-[22.63rem] left-[46.31rem] text-[1.63rem] inline-block w-[27.75rem]">
            Serving As a Community For You
          </b>
          <div className="absolute top-[26.5rem] left-[9.56rem] leading-[1.88rem] text-whitesmoke-200 inline-block w-[24.41rem]">
            Porem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="absolute top-[26.25rem] left-[46.31rem] leading-[1.88rem] text-whitesmoke-200 inline-block w-[23.19rem]">
            Worem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <b className="absolute top-[26.63rem] left-[0.63rem] text-[6.13rem] leading-[1.88rem] inline-block w-[8.94rem] h-[1.88rem]">
            01.
          </b>
          <b className="absolute top-[26.38rem] left-[37.06rem] text-[6.13rem] leading-[1.88rem] inline-block w-[10.06rem]">
            02.
          </b>
          {/* <img
            className="absolute top-[0rem] left-[49.72rem] w-[31.18rem] h-[32.5rem]"
            alt=""
            src="/group-261.svg"
          /> */}
          {/* <img
            className="absolute top-[30.94rem] left-[0rem] w-[14.75rem] h-[15.38rem]"
            alt=""
            src="/group-271.svg"
          /> */}
          {/* <img
            className="absolute top-[30.94rem] left-[66.15rem] w-[14.75rem] h-[15.38rem]"
            alt=""
            src="/group-28111.svg"
          /> */}
          <button className="cursor-pointer p-0 bg-hotpink-100 absolute top-[31.5rem] left-[9rem] rounded-xl box-border w-[19.69rem] h-[5.19rem] border-[3px] border-solid border-deeppink" />
          <button className="cursor-pointer p-0 bg-hotpink-100 absolute top-[31.5rem] left-[46.75rem] rounded-xl box-border w-[19.69rem] h-[5.19rem] border-[3px] border-solid border-deeppink" />
        </div>
        <button className="cursor-pointer p-0 bg-[transparent] absolute top-[87.25rem] left-[10.75rem] rounded-3xs [background:linear-gradient(90deg,_#ef58b4,_#faa4d6_48.46%,_#ed57b4)] shadow-[0px_4px_40px_rgba(177,_146,_65,_0.6)] box-border w-[12.44rem] h-[2.88rem] border-[1px] border-solid border-light-background-color" />
        <div className="absolute top-[87.88rem] left-[12.63rem] w-[9rem] h-[1.56rem] text-[1.13rem] text-light-background-color font-open-sans">
          <b className="relative top-[0rem] left-[0rem] tracking-[0.1em] capitalize">
            CHECK NOW
          </b>
          <img
            className="absolute top-[0.31rem] left-[8.5rem] w-[0.5rem] h-[0.88rem]"
            alt=""
            src="/vector111.svg"
          />
        </div>
        <div className="absolute top-[67.31rem] left-[31.44rem] w-[24.81rem] h-[24.5rem] text-[1.41rem] text-darkslategray-200">
          <div className="absolute top-[0rem] left-[2.5rem] rounded-[9.42px] bg-light-background-color w-[24.81rem] h-[24.5rem]" />
          <div className="absolute top-[7.81rem] left-[8.31rem] font-semibold inline-block w-[12.44rem] h-[1.94rem]">
            Estimate Cancer
          </div>
          <div className="absolute top-[10.31rem] left-[4.32rem] text-[1.25rem] leading-[203%] text-center inline-block w-[20.55rem] h-[8.79rem]">
            Doctors and pathologists can now estimate cancer just at one click.
          </div>
          <img
            className="absolute top-[2.18rem] left-[13.15rem] w-[3.72rem] h-[3.88rem] overflow-hidden"
            alt=""
            src="/medicaliconicathlab.svg"
          />
          <button className="cursor-pointer p-0 bg-[transparent] absolute top-[19.94rem] left-[9.38rem] rounded-3xs [background:linear-gradient(90deg,_#ef58b4,_#faa4d6_48.46%,_#ed57b4)] shadow-[0px_4px_40px_rgba(177,_146,_65,_0.6)] box-border w-[12.44rem] h-[2.88rem] border-[1px] border-solid border-light-background-color" />
          <div className="absolute top-[20.56rem] left-[8.25rem] w-[9rem] h-[1.56rem] text-[1.13rem] text-light-background-color font-open-sans"> 2
            <b className="relative top-[0rem] left-[2rem] tracking-[0.1em] capitalize">
              CHECK NOW
            </b>
            <img
              className="absolute top-[0.31rem] left-[11.5rem] w-[0.5rem] h-[0.88rem]"
              alt=""
              src="/vector111.svg"
            />
          </div>
        </div>
        <div className="absolute top-[162.25rem] left-[calc(50%_-_544px)] flex flex-row items-start justify-start gap-[1.88rem] text-[1rem] text-text-color font-montserrat">
          <div className="w-[14.88rem] shrink-0 flex flex-col items-center justify-start">
            <div className="self-stretch bg-light-background-color shadow-[0px_13px_19px_rgba(0,_0,_0,_0.07)] overflow-hidden flex flex-col py-[2.19rem] px-[2.5rem] items-start justify-start gap-[1.25rem]">
              <img
                className="relative rounded-181xl w-[4.5rem] h-[4.5rem] shrink-0 overflow-hidden"
                alt=""
                src="/circle-sec.svg"
              />
              <b className="relative tracking-[0.1px] leading-[1.5rem] inline-block w-[9.81rem]">
                Book now
              </b>
              <div className="relative bg-secondary-color-2 w-[3.13rem] h-[0.13rem] shrink-0" />
              <div className="relative text-[0.88rem] tracking-[0.2px] leading-[1.25rem] text-second-text-color">
                <p className="m-0">{`The gradual `}</p>
                <p className="m-0">{`accumulation of `}</p>
                <p className="m-0">{`information about `}</p>
              </div>
            </div>
          </div>
          <div className="w-[15.06rem] shrink-0 flex flex-col items-center justify-start">
            <div className="self-stretch bg-light-background-color shadow-[0px_13px_19px_rgba(0,_0,_0,_0.07)] overflow-hidden flex flex-col py-[2.19rem] px-[2.5rem] items-start justify-start gap-[1.25rem]">
              <img
                className="relative rounded-181xl w-[4.5rem] h-[4.5rem] shrink-0 overflow-hidden"
                alt=""
                src="/circle-sec1.svg"
              />
              <b className="relative tracking-[0.1px] leading-[1.5rem] inline-block w-[9.81rem]">
                Emergency Case
              </b>
              <div className="relative bg-secondary-color-2 w-[3.13rem] h-[0.13rem] shrink-0" />
              <div className="relative text-[0.88rem] tracking-[0.2px] leading-[1.25rem] text-second-text-color">
                <p className="m-0">{`The gradual `}</p>
                <p className="m-0">{`accumulation of `}</p>
                <p className="m-0">{`information about `}</p>
              </div>
            </div>
          </div>
          <div className="w-[15rem] shrink-0 flex flex-col items-center justify-start">
            <div className="self-stretch bg-light-background-color shadow-[0px_13px_19px_rgba(0,_0,_0,_0.07)] overflow-hidden flex flex-col py-[2.19rem] px-[2.5rem] items-start justify-start gap-[1.25rem]">
              <img
                className="relative rounded-181xl w-[4.5rem] h-[4.5rem] shrink-0 overflow-hidden"
                alt=""
                src="/circle-sec2.svg"
              />
              <b className="relative tracking-[0.1px] leading-[1.5rem] inline-block w-[10.75rem]">
                Painless procedures
              </b>
              <div className="relative bg-secondary-color-2 w-[3.13rem] h-[0.13rem] shrink-0" />
              <div className="relative text-[0.88rem] tracking-[0.2px] leading-[1.25rem] text-second-text-color">
                <p className="m-0">{`The gradual `}</p>
                <p className="m-0">{`accumulation of `}</p>
                <p className="m-0">{`information about `}</p>
              </div>
            </div>
          </div>
          <div className="w-[15rem] shrink-0 flex flex-col items-center justify-start">
            <div className="self-stretch bg-light-background-color shadow-[0px_13px_19px_rgba(0,_0,_0,_0.07)] overflow-hidden flex flex-col py-[2.19rem] px-[2.5rem] items-start justify-start gap-[1.25rem]">
              <img
                className="relative rounded-181xl w-[4.5rem] h-[4.5rem] shrink-0 overflow-hidden"
                alt=""
                src="/circle-sec3.svg"
              />
              <b className="relative tracking-[0.1px] leading-[1.5rem] inline-block w-[9.81rem]">
                Health Queries
              </b>
              <div className="relative bg-secondary-color-2 w-[3.13rem] h-[0.13rem] shrink-0" />
              <div className="relative text-[0.88rem] tracking-[0.2px] leading-[1.25rem] text-second-text-color">
                <p className="m-0">{`The gradual `}</p>
                <p className="m-0">{`accumulation of `}</p>
                <p className="m-0">{`information about `}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute h-[0.79%] w-[2.81%] top-[96.79%] right-[84.48%] bottom-[2.41%] left-[12.71%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-2711.svg"
        />
        <div className="absolute top-[309.44rem] left-[14.68rem] w-[2.53rem] h-[2.53rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-gray-300 w-[2.53rem] h-[2.53rem]" />
          <img
            className="absolute top-[0.61rem] left-[0.57rem] w-[1.38rem] h-[1.38rem] overflow-hidden"
            alt=""
            src="/icons8twitter-11.svg"
          />
        </div>
        <img
          className="absolute top-[310.21rem] left-[12.41rem] w-[0.55rem] h-[1.09rem]"
          alt=""
          src="/f.svg"
        />
        <img
          className="absolute top-[293.25rem] left-[10.69rem] w-[8rem] h-[7.69rem] object-cover"
          alt=""
          src="/whatsapp-image-20230406-at-1940-211@2x.png"
        />
        <button className="cursor-pointer [border:none] p-0 bg-hotpink-300 absolute top-[100.5rem] left-[51.94rem] w-[16.81rem] h-[5.19rem]" />
        <h2 className="m-0 absolute top-[94.56rem] left-[32.63rem] text-[2.81rem] font-normal font-dm-serif-display inline-block w-[34.75rem] h-[3.25rem]">
          Subscribe Newsletter
        </h2>
        <a className="[text-decoration:none] absolute top-[100.5rem] left-[20.63rem] bg-whitesmoke-100 box-border w-[29.44rem] h-[5.19rem] border-[1px] border-solid border-lightgray" />
        <div className="absolute top-[102.06rem] left-[24.06rem] text-[1.56rem] inline-block w-[14.81rem]">
          Enter your email
        </div>
        <div className="absolute top-[102.06rem] left-[56.69rem] text-[1.56rem] text-light-background-color inline-block w-[8.13rem]">
          Get Start
        </div>
        <b className="absolute top-[148.88rem] left-[16.63rem] text-[1.13rem] font-open-sans text-gray-300">
          Diagonis Tests Reports,Schedule
        </b>
        <b className="absolute top-[148.88rem] left-[58.25rem] text-[1.13rem] font-open-sans text-gray-300">
          Find Support Groups
        </b>
      </div>
    </LocalizationProvider>
  );
};

export default Medical;
