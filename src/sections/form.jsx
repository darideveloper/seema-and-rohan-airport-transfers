// react
import { useState, useEffect } from "react"

// Components
import Subtitle from "../components/subtitle"
import TransportTypes from "../components/transport-types"
import Input from "../components/input"
import Select from "../components/select"
import Fieldset from "../components/fieldset"
import FormText from "../components/form-text"
import VipCode from "../components/vip-code"
import SubmitBtn from "../components/submit-btn"

// Api
import { getHotels } from "../api/hotels"
import { submitStripe } from "../api/stripe"
import { getTransports } from "../api/transports"

// Context
import LoadContext from '../context/load'
import VipCodeContext from '../context/vip-code'
import { useContext } from 'react'

export default function Form() {

  const { setLoading } = useContext(LoadContext)
  const { vipCode } = useContext(VipCodeContext)

  const [transports, setTransports] = useState([])
  const [activeTransportType, setActiveTransportType] = useState('Arriving,Departing')
  const [mediaQuery, setMediaQuery] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [hotel, setHotel] = useState()
  const [otherHotel, setOtherHotel] = useState('')
  const [hotels, setHotels] = useState([])
  const [arrivingDate, setArrivingDate] = useState('')
  const [arrivingTime, setArrivingTime] = useState('')
  const [arrivingAirline, setArrivingAirline] = useState('')
  const [arrivingFlight, setArrivingFlight] = useState('')
  const [departingDate, setDepartingDate] = useState('')
  const [departingTime, setDepartingTime] = useState('')
  const [departingAirline, setDepartingAirline] = useState('')
  const [departingFlight, setDepartingFlight] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  function handleUpdateType(id) {
    setActiveTransportType(id)
  }

  function handleResize() {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setMediaQuery(mediaQuery.matches)
  }

  function handleSubmit(e) {

    // Show loading
    setLoading(true)

    // Don't submit form
    e.preventDefault()

    // Get current service name
    const currentService = transports.find(transport => transport.id == activeTransportType)
    const serviceName = currentService.text

    // Save my place — no charge in UI; backend receives 0
    submitStripe(serviceName, 0, name, lastName, vipCode, phone, email).then(() => {
      // Disable loading
      setLoading(false)
    })

  }

  function updateTransports() {
    getTransports().then(apiTransports => {
      setTransports(apiTransports)
      setActiveTransportType(apiTransports[2].id)
    })
  }

  function updateHotels() {
    getHotels().then(apiHotels => {
      setHotels(apiHotels)
      setHotel(apiHotels[0].value)
    })
  }

  useEffect(() => {
    updateTransports()
    updateHotels()

    // Detect when resize screen and update media query status
    window.addEventListener('resize', () => {
      handleResize()
    })

    // Handle when loads
    handleResize(handleResize())
  }, [])

  function handleUpdateDate(e, title) {
    if (title == "Arriving") {
      setArrivingDate(e.target.value)
    } else {
      setDepartingDate(e.target.value)
    }
  }

  function getArraivingDepartingForm() {
    // Generate arraiving and departing forms

    // Identify active transport type
    const activeForms = activeTransportType.split(",")

    const fieldsets = []
    for (let title of activeForms) {

      // Text changes and set functions
      let direction = "in"
      if (title == "Departing") {
        direction = "from"
      }

      fieldsets.push(
        <Fieldset title={title} key={title}>
          <legend className="title text-xl uppercase mb-3"></legend>
          <Input
            label={`${title} date`}
            type='date'
            name={`${title.toLowerCase()}-date`}
            handleUpdate={(e) => handleUpdateDate(e, title)}
            value={title == "Arriving" ? arrivingDate : departingDate}
            isRequired={false}
          />
          <Input
            label={`${title} time ${direction} Cancun`}
            type='time'
            name={`${title.toLowerCase()}-time`}
            handleUpdate={(e) => title == "Arriving" ? setArrivingTime(e.target.value) : setDepartingTime(e.target.value)}
            value={title == "Arriving" ? arrivingTime : departingTime}
          />
          <Input
            label='Airline'
            type='text'
            name='airline'
            placeholder="Enter your airline"
            handleUpdate={(e) => title == "Arriving" ? setArrivingAirline(e.target.value) : setDepartingAirline(e.target.value)}
            value={title == "Arriving" ? arrivingAirline : departingAirline}
          />
          <Input
            label='Flight number'
            type='text'
            name='flight'
            placeholder="Enter your flight number"
            handleUpdate={(e) => title == "Arriving" ? setArrivingFlight(e.target.value) : setDepartingFlight(e.target.value)}
            value={title == "Arriving" ? arrivingFlight : departingFlight}
          />
          <FormText
            text={`*In case you have connecting flights, please make sure you provide the info for your actual flight ${title.toLowerCase()} ${direction} Cancun`}
          />
        </Fieldset>
      )
    }

    return fieldsets
  }

  // Generate passager options
  const maxPassenger = 8
  const passengersData = []
  for (let passengerNum = 1; passengerNum <= maxPassenger; passengerNum++) {
    let label = `${passengerNum} passengers`
    if (passengerNum == 1) {
      label = `${passengerNum} passenger`
    }
    passengersData.push({ "value": `${passengerNum}`, "label": label })
  }

  return (
    <section className="buy-form container" id="buy">
      <Subtitle
        text='Transportation Options'
      />

      <form action="." method="post" className="mx-auto" onSubmit={e => { handleSubmit(e) }}>
        <TransportTypes
          handleUpdateType={handleUpdateType}
          activeTransportType={activeTransportType}
          transports={transports}
        />

        <div className="fields w-5/6 mx-auto grid gap-10" style={{ gridTemplateColumns: mediaQuery ? "repeat(1, 1fr)" : activeTransportType == "Arriving,Departing" ? "repeat(3, 1fr)" : "repeat(2, 1fr)" }}>
          <Fieldset title='Guest Information'>
            <legend className="title text-xl uppercase mb-3"></legend>
            <Input
              label='Name'
              placeholder='Enter your name'
              type='text'
              name='name'
              handleUpdate={(e) => setName(e.target.value)}
              value={name}
            />
            <Input
              label='Last name'
              placeholder='Enter your last name'
              type='text'
              name='last-name'
              handleUpdate={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <Select
              label='Number of passengers'
              name='passengers'
              handleUpdate={(e) => setPassengers(e.target.value)}
              options={passengersData}
              activeOption={passengers}
            />
            <FormText
              text="Maximum eight passengers per van"
            />
            <Input
              label='Email'
              placeholder='sample@gmail.com'
              type='email'
              name='email'
              handleUpdate={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FormText
              text="Your email can requested again in the checkout page, be sure to enter it correctly"
            />
            <Input
              label='Phone number'
              placeholder='555-555-5555'
              type='tel'
              name='phone'
              handleUpdate={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <Select
              label='Hotel'
              name='hotel'
              handleUpdate={(e) => {
                // Save hotel value
                const value = e.target.value
                setHotel(value)
              }}
              options={hotels}
              activeOption={hotel}
            />

            {
              // Render other hotel input
              hotel == "other"
              &&
              <Input
                label='Hotel Name'
                placeholder='Enter the hotel full name'
                type='text'
                name='hotel-name'
                handleUpdate={(e) => { setOtherHotel(e.target.value) }}
                value={otherHotel}
              />
            }

          </Fieldset>

          {getArraivingDepartingForm()}

        </div>


        <div
          className={`
            wrapper-submit
            flex items-center justify-center mt-10
          `}>
          <SubmitBtn
            value="Save my place"
            extraClass={`w-48 py-3`}
          />
        </div>

      </form>
    </section>
  )
}
