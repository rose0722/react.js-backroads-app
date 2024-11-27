import React from 'react'
import Title from './Title'
import Service from './Service'
import { services } from '../data'


const Services = () => {
  return (
    <section className="section services" id="services">

      <Title title='our' subTitle='services' />

      <div className="section-center services-center">
        {services.map((link) => {

            return <Service key={link.id} {...link} />
            
        })}
      </div>
    </section>
  )
}

export default Services
