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