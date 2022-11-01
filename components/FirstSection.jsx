import React from 'react';
import Image from 'next/image';
import dashboardPicFull from "../public/team-assets/dashboard-full.png";
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const FirstSection = () => {
  return (
    <div className="wrapper grid-container">

      <div className='grid-column-left'>
        <div className="grid-content">
          <h2>Your hub for teamwork</h2>
          <p>Project discussions, important documents, free food announcements: they all live tidily together in Team. With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person.</p>
          <Link href="/" className='link'>
            <div className="link-wrap">
              Learn More <HiOutlineArrowNarrowRight/>
            </div>
          </Link>
        </div>
      </div>

      <div className='grid-column-right'>
        <Image className='img dashboard-img' src={dashboardPicFull} alt="dashboard"/>
      </div>

    </div>
  )
}

export default FirstSection
