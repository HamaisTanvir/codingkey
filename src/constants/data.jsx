import medicalWing from '../assets/medicalwinglocums-hover.png'
import bitrix24 from '../assets/bitrix24-hover.png'
import cP from '../assets/clientpoint-hover.png'
import five9 from '../assets/five9-hover.png'
import gSuite from '../assets/gsuite-hover.png'
import ozonetel from '../assets/ozonetel-hover.png'
import teamWork from '../assets/teamwork-hover.png'
import twilio from '../assets/twilio-hover.png'
import zoho from '../assets/zoho-hover.png'

import { Calendar } from 'lucide-react'
import { ThumbsUp } from 'lucide-react'
import { Globe } from 'lucide-react'

import softwareDevelopment from '../assets/software development.png'
import mobileDevelopment from '../assets/mobiledeveloppment.png'
import qualityAssurance from '../assets/qualityassurance.png'
import dataScience from '../assets/database.png'
import iOT from '../assets/iot.png'
import devOps from '../assets/devops.png'
import uiUX from '../assets/uiux.png'
import digiMktng from '../assets/marketing.png'



export const navItems = [
    {title: 'Home', slug: '/',},
    {title: 'About us', slug: '/about-us',},
    {title: 'Careers', slug: '/careers',},
    {title: 'Contact us', slug: '/contact-us',},
]

export const logos = [
    `${medicalWing}`,
    `${bitrix24}`,
    `${cP}`,
    `${five9}`,
    `${gSuite}`,
    `${ozonetel}`,
    `${teamWork}`,
    `${twilio}`,
    `${zoho}`,    
]

export const logosSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '5px',
        },
      },
    ],
  };

  export const stats = [
    {id: 1, text: 'Average Experience', value: 8, icon: <Calendar />, suffix: '+ Years'},
    {id: 2, text: 'Successful Deliveries', value: 500, icon: <ThumbsUp />, suffix: '+ Projects'},
    {id: 2, text: 'Customer Coverage', value: 4, icon: <Globe />, suffix: '+ Continents' },
  ]

  export const coreValuesI = [
    {id: 1, title: 'Cloud Solutions', desc: 'We know data is the most important piece of your business. Our cloud solutions are digitally engineered to combine the security and scalability in an application that will run faster and require less maintenance.', icon: `${softwareDevelopment}`},
    {id: 2, title: 'Mobile Apps Development', desc: 'We offer a full cycle of application design, integration, management services and efficient features that are user-friendly and increase productivity and sales. Whether it is a consumer-oriented app or an enterprise-class solution, the company leads through the process of creating smart mobile solutions, from ideation and concept, to delivery, and to ongoing support.', icon: `${mobileDevelopment}`},
    {id: 3, title: 'Quality Assurance', desc: 'We offer a comprehensive set of software quality assurance services which ensures concrete control over product’s life cycle, monitor every development stage, and give accurate product quality information. Our QA experts have been using the latest practices and technologies to ensure efficient performance and delivery of High-Quality Software within the required timeframe.', icon: `${qualityAssurance}`},
  ]
  export const coreValuesII =[
    {id: 4, title: 'Testing & Automation', desc: 'We ensure fast delivery of software without losing quality, as we employ a selected approach to automated QA where our team has standardized skills using various tools and technologies with minimizing risks. Our DevOps engineers and QA testers work side by side to allow for seamless and continuous agile delivery.', icon: `${qualityAssurance}`},
    {id: 5, title: 'Data Science', desc: 'Our team has an abundance of expertise in creating solutions for big data analysis, customer journey mapping, designing and implementing data warehousing systems. Our insight into business issues and opportunities allows our customers to generate both the right questions and the right answers.', icon: `${dataScience}`},
    {id: 6, title: 'Internet of Things (IOT)', desc: 'Our IoT managed services are a set of end to end services designed to connect all your operations to a single network using sensors, software, network connectivity tools, and necessary electronics that not only let your business to enhance productivity but helps in providing you with the best IoT managed services to improve your current IoT solution and services even further.', icon: `${iOT}`},
  ]

  export const coreValuesIII = [
    {id: 7, title: 'Infrastructure & DevOps', desc: 'DevOps will automate and optimize your IT processes where our expert DevOps engineers will help attune the delivery, deployment, development, security, and support of any high-load, fail-safe system with microservices architecture — so your business strategy can always rely on high-quality software.', icon: `${devOps}`},
    {id: 8, title: 'UI/UX Design', desc: 'Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Our design team has created a large variety of applications and products for all major industries. Our designers work with you to understand your brand, challenges, business goals, and how your end users will interact with your product or application.', icon: `${uiUX}`},
    {id: 9, title: 'Digital Marketing', desc: 'Our technology experts work hand in hand with your marketing team to help them get the most out of the software and platforms that underlie your digital marketing strategy in return that promotes your brand and drives sales. We provide the custom digital marketing solutions you need to add content across multiple channels, integrate your existing systems, and get your site running perfectly for great user experience.', icon: `${digiMktng}`},
  ]