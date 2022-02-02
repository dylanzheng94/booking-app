import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import PurposeItem from '../components/Purpose-Item/purpose-item'
import { Col, Row } from 'react-bootstrap'

export default function Home() 
{
  // 

  

  // States ---------------------------------------------------------------------------------------

  const [isBooking, setIsBooking] = useState(false)

  // View -----------------------------------------------------------------------------------------
  return (
  
    <div style={{padding: '2em', width: '-webkit-fill-available'}}>
      
      <Row className={'flex-column-reverse flex-md-row'}>
        
        <Col sm>
        <h2 style={{fontWeight: 'bolder'}}>
          Book your next appointment with ease
        </h2>

        <p style={{marginTop: '2em'}}>
          We can help you:
        </p>
        <ul>
          <li>Book and manage appointments</li>
          <li>Schedule an interview</li>
          <li>Change meeting service channels</li>
        </ul>

        
        </Col>
        <Col sm={{order: 1}}>
        <Image src="/meeting.jpg" alt="Abstract illustration of someone booking an appointment " width={280} height={200}/>      
        </Col>
      </Row>

        <div style={{display: 'flex', justifyContent: 'center', marginTop: '2em'}}>
    
          <Link href="/booking">
          <button style={{backgroundColor: '#3949AB', color: 'white', padding: '0.5em 3em', borderRadius: '2em'}}>
            Book Now
          </button>
          </Link>
        </div>

    </div>
  )
}
