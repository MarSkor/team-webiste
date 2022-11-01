import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';
import groupOnePic from "../public/team-assets/Group-1.png";
import groupTwoPic from "../public/team-assets/Group-2.png"

const SecondSection = () => {
  return (
    <div className="wrapper grid-section">
      <div className="grid-row">
        <div className='grid-one'>
          <Image className='img img-group' src={groupOnePic} alt="dashboard"/>
        </div>

        <div className='grid-two'>
          <div className="grid-content">
              <h2>Simplest task management</h2>
              <p>Task management with Team is as simple as it gets. No complicated layout and need for user training. Your team members will intuitively know how to navigate the platform. It’s so simple, a baby could do it!</p>
              <Link href="/" className='link'>
                <div className="link-wrap">
                  Learn More <HiOutlineArrowNarrowRight/>
                </div>
              </Link>
            </div>
        </div>
      </div>
      
      <div className="grid-row">
        <div className='grid-res-one'>
          <div className="grid-content">
              <h2>Scheduling that actually works</h2>
              <p>Integrated a Team calendar with your favorite calendar app, be it Google Calendar or iCal.</p>
              <p>Each team member works with their favorite calendar, while all the date is synced with the master calendar.</p>
              <Link href="/" className='link'>
                <div className="link-wrap">
                  Learn More <HiOutlineArrowNarrowRight/>
                </div>
              </Link>
            </div>
        </div>

        <div className='grid-res-two'>
          <Image className='img img-group' src={groupTwoPic} alt="dashboard"/>
        </div>
      </div>
    </div>
  )
}

export default SecondSection