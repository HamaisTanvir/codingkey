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

import ios from '../assets/ios.png'
import android from '../assets/android.png'
import flutter from '../assets/Flutter.png'
import ionic from '../assets/Ionic.png'
import swift from '../assets/Swift.png'
import kotlin from '../assets/kotlin.png'
import objectiveC from '../assets/ObjectiveC.png'
import titanium from '../assets/Titanium.png'
import xamarin from '../assets/Xamarin.png'
import angular from '../assets/Angular.png'
import reactNative from '../assets/React.png'
import typescript from '../assets/TypeScript.png'
import vue from '../assets/Vue.png'
import wpf from '../assets/WPF.png'
import html5 from '../assets/HTML5.png'
import mongoDB from '../assets/Mongo DB.png'
import mySql from '../assets/MySQL.png'
import msSql from '../assets/MsSQL.png'
import firebase from '../assets/Firebase.png'
import realm from '../assets/Realm.png'
import dynamoDB from '../assets/DynamoDB.png'
import oracle from '../assets/Oracle.png'
import postgreSql from '../assets/PostgreSQL.png'
import php from '../assets/PHP.png'
import java from '../assets/Java.png'
import Net from '../assets/NET.png'
import nodeJs from '../assets/Node.png'
import rails from '../assets/Rails.png'
import python from '../assets/Python.png'
import drupal from '../assets/Drupal.png'
import joomla from '../assets/Joomla.png'
import wordpress from '../assets/Wordpress.png'
import magento from '../assets/Magento.png'
import shopify from '../assets/Shopify.png'
import aws from '../assets/AWS.png'
import google from '../assets/Google Cloud.png'
import gradle from '../assets/Gradle.png'
import jenkin from '../assets/Jenkins.png'
import appium from '../assets/Appium.png'
import seleinum from '../assets/Seleinum.png'
import azure from '../assets/azure.png'

import collaborations from '../assets/collaboration.png'
import professionals from '../assets/user.png'
import quality from '../assets/medal.png'
import support from '../assets/support.png'
import transparency from '../assets/transparency.png'
import privacy from '../assets/privacy.png'

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
    {id: 3, text: 'Customer Coverage', value: 4, icon: <Globe />, suffix: '+ Continents' },
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

  export const tabMobile = [
    {id: 1, brand: 'iOS', icon: `${ios}` },
    {id: 2, brand: 'Android', icon: `${android}` },
    {id: 3, brand: 'React Native', icon: `${reactNative}` },
    {id: 4, brand: 'Flutter', icon: `${flutter}` },
    {id: 5, brand: 'Ionic', icon: `${ionic}` },
    {id: 6, brand: 'Swift', icon: `${swift}` },
    {id: 7, brand: 'Kotlin', icon: `${kotlin}` },
    {id: 8, brand: 'ObjectiveC', icon: `${objectiveC}` },
    {id: 9, brand: 'Titanium', icon: `${titanium}` },
    {id: 10, brand: 'Xamarin', icon: `${xamarin}` }
  ]

  export const tabFrontEnd = [
    {id: 1, brand: 'Angular', icon: `${angular}` },
    {id: 2, brand: 'React Js', icon: `${reactNative}` },
    {id: 3, brand: 'TypeScript', icon: `${typescript}` },
    {id: 4, brand: 'Vue', icon: `${vue}` },
    {id: 5, brand: 'WPF', icon: `${wpf}` },
    {id: 6, brand: 'Html5', icon: `${html5}` },
  ]

  export const tabDatabase = [
    {id: 1, brand: 'Mongo DB', icon: `${mongoDB}` },
    {id: 2, brand: 'MySQL', icon: `${mySql}` },
    {id: 3, brand: 'MsSQL', icon: `${msSql}` },
    {id: 4, brand: 'Firebase', icon: `${firebase}` },
    {id: 5, brand: 'Realm', icon: `${realm}` },
    {id: 6, brand: 'DynamoDB', icon: `${dynamoDB}` },
    {id: 7, brand: 'Oracle', icon: `${oracle}` },
    {id: 8, brand: 'PostgreSQL', icon: `${postgreSql}` },
  ]

  export const tabBackEnd = [
    {id: 1, brand: 'PHP', icon: `${php}` },
    {id: 2, brand: 'Java', icon: `${java}` },
    {id: 3, brand: '.NET', icon: `${Net}` },
    {id: 4, brand: 'Node.Js', icon: `${nodeJs}` },
    {id: 5, brand: 'Rails', icon: `${rails}` },
    {id: 6, brand: 'Python', icon: `${python}` },
  ]

  export const tabCMS = [
    {id: 1, brand: 'Drupal', icon: `${drupal}` },
    {id: 2, brand: 'Joomla', icon: `${joomla}` },
    {id: 3, brand: 'Wordpress', icon: `${wordpress}` },
    {id: 4, brand: 'Magento', icon: `${magento}` },
    {id: 5, brand: 'Shopify', icon: `${shopify}` },  
  ]

  export const tabDevops = [
    {id: 1, brand: 'AWS', icon: `${aws}` },
    {id: 2, brand: 'Google Cloud', icon: `${google}` },
    {id: 3, brand: 'Gradle', icon: `${gradle}` },
    {id: 4, brand: 'Jenkins', icon: `${jenkin}` },
    {id: 5, brand: 'Appium', icon: `${appium}` },
    {id: 5, brand: 'Seleinum', icon: `${seleinum}` },
    {id: 5, brand: 'Azure', icon: `${azure}` },
  ]

  export const outSourcingI = [
    {id: 1, title: 'Remote Collaborations', desc: 'Our decades of experience has taught us how to take care of the pain points in remote collaborations, through best practices and lean processes.', icon: `${collaborations}`},
    {id: 2, title: 'Team of Professionals', desc: 'We always ensure to provide a team of senior professionals to bring reliability and predictability to project deliverables.', icon: `${professionals}`},
    {id: 3, title: 'Quality', desc: 'CodingKey thrives off an environment where quality has evolved to become an embedded part of our teams culture.', icon: `${quality}`},
  ]

  export const outSourcingII = [
    {id: 1, title: '360 Degree Support', desc: 'We provide 360 degree support to our customers through a diverse skill set, involving all phases of product life cycle.', icon: `${support}`},
    {id: 2, title: 'Transparency', desc: 'We aim to be transparent in all aspects of our collaborations, to strengthen and support a long-term customer relationship.', icon: `${transparency}`},
    {id: 3, title: 'Data Privacy and IP', desc: 'We ensure appropriate legal and contractual measures, up to customers satisfaction to address any data privacy & IP concerns.', icon: `${privacy}`},
  ]
 
  export const testimonials = [
    {id: 1, title: 'Director of Software Design & Delivery', desig: '/ Innovation Consultancy', 
      text: 'Im excited to share my excellent experience working with Coding Key. When partnering with a new team, communication and work quality are my deal-breakers, and Im happy to say Coding Key shined in both areas. They werent just engineering experts but also a true pleasure to work with. They took the time to explore different technical paths for our project, doing all the necessary homework to ensure we were on solid ground. I always found their recommendations to be well thought out, clearly communicated and technically sound. Despite the projects evolving requirements, they consistently delivered top-notch work on time and within budget. I highly recommend Coding Key as a trustworthy and competent offshore development partner. Theyve earned my trust and respect, and Im looking forward to our continued collaboration.'},
    {id: 2, title: 'VP Product Strategy', desig: '/ Innovation Consultancy' ,
      text: 'Im excited to share my excellent experience working with Coding Key. When partnering with a new team, communication and work quality are my deal-breakers, and Im happy to say Coding Key shined in both areas. They werent just engineering experts but also a true pleasure to work with. They took the time to explore different technical paths for our project, doing all the necessary homework to ensure we were on solid ground. I always found their recommendations to be well thought out, clearly communicated and technically sound. Despite the projects evolving requirements, they consistently delivered top-notch work on time and within budget. I highly recommend Coding Key as a trustworthy and competent offshore development partner. Theyve earned my trust and respect, and Im looking forward to our continued collaboration.'},
    {id: 3, title: 'Zebulon Evans', desig: '/ CTO - ClientPoint',
      text: 'Im excited to share my excellent experience working with Coding Key. When partnering with a new team, communication and work quality are my deal-breakers, and Im happy to say Coding Key shined in both areas. They werent just engineering experts but also a true pleasure to work with. They took the time to explore different technical paths for our project, doing all the necessary homework to ensure we were on solid ground. I always found their recommendations to be well thought out, clearly communicated and technically sound. Despite the projects evolving requirements, they consistently delivered top-notch work on time and within budget. I highly recommend Coding Key as a trustworthy and competent offshore development partner. Theyve earned my trust and respect, and Im looking forward to our continued collaboration.'},
  ]

  export const sliderSettings = {
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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