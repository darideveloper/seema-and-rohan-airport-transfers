import { useState, useEffect } from 'react'
import Subtitle from '../components/subtitle'
import FaqItem from '../components/faq-item'
import { getHotels } from '../api/hotels'

export default function Faqs() {
  const [hotelName, setHotelName] = useState('the resort')

  useEffect(() => {
    getHotels().then(hotels => {
      if (hotels && hotels.length > 0 && hotels[0].value !== 'other') {
        setHotelName(hotels[0].label)
      }
    })
  }, [])

  const faqs = [
    {
      question: "WHY SHOULD I BOOK WITH CANCUN CONCIERGE? I AM SEEING CHEAPER TRANSPORTATION RATES ONLINE.",
      answer: (
        <p>
          Booking with Cancun Concierge ensures more than just transportation. We offer personalized service, local expertise, and seamless coordination for your entire trip. Our commitment to quality, reliability, and customer satisfaction sets us apart from cheaper options online. With us, you're not just booking a ride, you're investing in a stress-free, safe and unforgettable experience tailored to your needs.
        </p>
      )
    },
    {
      question: "WHAT IS INCLUDED WITH CANCUN CONCIERGE'S TRANSPORTATION SERVICE?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Personalized email transportation confirmation</li>
          <li>Meet & greet staff at the airport dedicated for Seema & Rohan's wedding</li>
          <li>Bottled waters</li>
          <li>Professional and trusted drivers</li>
          <li>A single rate inclusive of all taxes and fees</li>
        </ul>
      )
    },
    {
      question: "HOW DO I FIND CANCUN CONCIERGE ONCE I'M READY TO LEAVE THE AIRPORT?",
      answer: (
        <p>
          Our staff will be wearing white polo shirts and khaki pants and holding a sign with Seema & Rohan's wedding. The staff will be waiting right outside the airport terminal by the pre-arranged transportation area. Our staff will escort you to your awaiting vehicle to safely and quickly get you over to the {hotelName}
        </p>
      )
    },
    {
      question: "HOW DO I PAY FOR MY TRANSPORTATION?",
      answer: (
        <p>
          You can pay right here! Use your credit or debit card to finish the purchase of your transportation between the Cancun Airport and the {hotelName} resort.
        </p>
      )
    },
    {
      question: "WHAT DO I NEED TO DO IF MY FLIGHT IS DELAYED OR CANCELLED?",
      answer: (
        <>
          <p className="mb-4">
            If your flight is delayed, no action is needed on your part as we will monitor each flight and schedule your transportation based on the real time arrival of your flight.
          </p>
          <p>
            If your flight is cancelled, please notify us immediately via WhatsApp to the following number: +52 9982931099 and share your new flight information so that we can reschedule your transportation accordingly without any penalties. Please note that no shows or last minute cancellations are not refundable.
          </p>
        </>
      )
    }
  ]

  return (
    <section className="faqs container mx-auto px-4 mb-20" id="faqs">
      <Subtitle text="FAQS" />
      <div className="questions-wrapper max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}
