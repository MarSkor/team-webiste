import React from "react";
import { Hero, FirstSection, SecondSection, Testimonial } from "../components";
import { client } from "../lib/client";

const Home = ({ testimonialsData }) => {
  console.log(testimonialsData)
  return (
    <>
      <section className="section hero-section">
        <Hero/>
      </section>

      <div className="main-wrapper">
        <section className="section first-section">
          <FirstSection/>
        </section>
        <section className="section second-section">
          <SecondSection/>
        </section>
        <section className="section third-section pd-10">
          <h2>What people say about Team</h2>
          <div className="card-container">
            {testimonialsData?.map((testimonial) => <Testimonial key={testimonial._id} testimonial={testimonial}/>)}
          </div>
        </section>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const testimonialsQuery = '*[_type == "testimonials"]';
  const testimonialsData = await client.fetch(testimonialsQuery);

  return{
    props: { testimonialsData }
  }
}

export default Home;