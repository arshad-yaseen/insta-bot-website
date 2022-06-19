import React, { useEffect, useState } from 'react';
import Modal from '../utils/Modal';



function HeroHome() {


useEffect(()=> {
  let bot_code = `let followbutton = document.querySelectorAll('.PolarisIGButton')[1] || document.querySelectorAll('._acan')[0]
let unfollowbutton = document.querySelectorAll('.PolarisIGButton')[1] || document.querySelectorAll('._acan')[0]

let timeBetweenClick = 2000;
let timeBetweenFollowUnfollow = 30000;
let iterateCount = 9;
let timeBetweenSessions =  3600000;
let followedUnfollowedCount = 0;
let maximumInstagramAllowedFollowCount = 145;

function startClick() {
    
    followedUnfollowedCount += 1;
    setTimeout(() => {
    followbutton.click();
  }, 0);
  setTimeout(() => {
    unfollowbutton.click();
  }, timeBetweenClick);
  timeBetweenClick += timeBetweenClick;
  setTimeout(() => {
    document.querySelector('._a9--').click()
  }, timeBetweenClick);
  timeBetweenClick = 2000;
}

function startBot() {
  let count = 1;
  let minusCount = timeBetweenFollowUnfollow;
  let botStartTimer = 30

  setInterval(()=> {
    if(botStartTimer > 0 && botStartTimer <= 30) {
      console.log('Bot starts in : ' + botStartTimer)
    }
    botStartTimer = botStartTimer - 1
  },1000)

  setInterval(() => {
    if (count <= iterateCount && followedUnfollowedCount < maximumInstagramAllowedFollowCount) {
      count = count + 1;
      startClick();
    } else {
      minusCount += timeBetweenFollowUnfollow;
      setTimeout(() => {
        count = 1;
      }, timeBetweenSessions - minusCount);
    }
  }, timeBetweenFollowUnfollow);
}

  startBot();
  `

  let code_copy_button = document.getElementById('copy_code_button')
  
  code_copy_button.onclick = function() {
    navigator.clipboard.writeText(bot_code)
  }
},[])

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-16 sm:px-32">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your instagram <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 mt-8" data-aos="zoom-y-out" data-aos-delay="150">This Bot Helps You to Grow Your Instagram Followers Quickly and Genuine <span className="text-black font-bold">With accepting all Instagram Policy</span></p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://github.com/arshad-yaseen/instagram-bot-js/blob/master/README.md">Documentation</a>
                </div>
                <div>
                  <a className="cursor-pointer btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" id="copy_code_button">Copy Bot Code</a>
                </div>
              </div>
            </div>
          </div>

          <script src="https://gist.github.com/arshad-yaseen/ff3747f1ca5c0876cbe99b041abc58e5.js"></script>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;