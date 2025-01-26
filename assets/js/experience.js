AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "ECE Intern",
    cardImage: "assets/images/experience-page/croped final icon of beable health.png",
    place: "Beable Health Pvt. Ltd.",
    time: "(May, 2024 - July, 2024)",
    desp: "<li>Learnt to make PCB board and designing and embedded systems</li> <li>Learnt multiple concepts such as Embedded C, OOPS, etc.</li> <li>Learnt to solder and desolder compnents and use Arduino and various sensors</li>",
  },
  {
    title: "ShadowFox Intern",
    cardImage: "assets/images/experience-page/org-logo.png",
    place: "ShadowFox",
    time: "(September, 2024)",
    desp: "<li>Worked with Shadowfox as and intern and learn Cybersecurity</li><li>Worked on topics such as wireshark, debugging , ports and much more which was insightful as well as informative</li><li>Successfully completed all the challenges faced and appeared victorious</li>",
  },
  {
    title: "Finalist at Smart India Hackathon",
    cardImage: "assets/images/experience-page/SIH_logo_2024_horizontal.png",
    place: "SMART INDIA HACKATHON",
    time: "(December, 2024)",
    desp: "<li>Worked on the project Agentless Vunlerability Tracker and Detector</li><li>Our project utilised a comprehensive set of powershell code which does not require admin privilages to work and extract the information with a single click.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "HacktoberFest 2022",
    cardImage: "assets/images/experience-page/hacktober.jpg",
    description:
      "Made Controbutions to the Hacktober fest website and earned a badge",
  },
  {
    title: "HackPrix 2023",
    cardImage: "assets/images/experience-page/hackprix.jpg",
    description:
      "A 2-Day hackathon where i participated and created a project based on a website",
  },
  {
    title: "HackForge 2025",
    cardImage: "assets/images/experience-page/hackforge.jpg",
    description:
      "Secured 4th position for making EduSpphere with my team EduCore",
  },
  {
    title: "SIH 2024",
    cardImage: "assets/images/experience-page/SIH_logo_2024_horizontal.png",
    description:
      "Project selected for the finals and secured 2nd place",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "IEEE MJCET",
    subtitle: "Secrectary",
    image: "assets/images/experience-page/ieeemjcet.jpg",
    desp: "Leading the Role of Secrectary in IEEE MJCET, and implementing projects and making accomplishments",
    href: "https://www.instagram.com/ieee_mjcet/",
  },
  {
    title: "IEEE MTT-S MJCET",
    subtitle: "Vice Chair",
    image: "assets/images/experience-page/ieeemtts.jpg",
    desp: "Leading the Role of Vice Chair in IEEE MTT-S MJCET making projects and worthwile events",
    href: "https://www.instagram.com/ieeemttsmjcet_/",
  },
  {
    title: "IEEE SPS MJCET",
    subtitle: "Secrectary",
    image: "assets/images/experience-page/ieeesps.jpg",
    desp: "Leading the Role of Secrectary in IEEE SPS MJCET, utilizing the opportunities and making the best out of it",
    href: "https://www.instagram.com/ieeespsmjcet/",
  },
  {
    title: "IEEE RAS MJCET",
    subtitle: "Human Resource Manager",
    image: "assets/images/experience-page/ieeeras.jpg",
    desp: "Leading the Role of Human Resource Manager in IEEE RAS MJCET, Outlooking for special talents and recruiting them",
    href: "https://www.linkedin.com/company/ieeemjcet_ras/",
  },
  {
    title: "IEEE MAPCON 2024",
    subtitle: "Volunteer",
    image: "assets/images/experience-page/IEEE_MAPCON_2022_637964026050804351_200.png",
    desp: "Recognized and invited to MAPCON after the success of our IEEE APS COPE Event where i was a speaker",
    href: "https://ieeemapcon.org/",
  },
  {
    title: "IEEE AP-S COPE EVENT",
    subtitle: "Speaker",
    image: "assets/images/experience-page/1734172378678.png",
    desp: "Got the privilage to be a speaker at the IEEE AP-S COPE Event and shared my knowledge in AI tools and techniques",
    href: "https://www.linkedin.com/company/ieee-mtts-mjcet-sb/posts/?feedView=all",
  },
  {
    title: "Null Events",
    subtitle: "Attendee",
    image: "assets/images/experience-page/1724654508485.png",
    desp: "Attending the Null Events and learning the concepts of Cybersecurity and Ethical Hacking",
    href: "https://null.community/",
  },


];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
