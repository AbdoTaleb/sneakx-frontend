import React from 'react'
import './Newsletter.scss'
import { FiMail} from 'react-icons/fi'

function Newsletter() {
  return (
    <section className='newsletter'>
        <FiMail className="newsletter__icon"></FiMail>
        <h2 className='newsletter__title'>
            Subscribe below to stay up-to-date with everything SneakX.
        </h2>
        <form className="newsletter__form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
      </form>
    </section>
  )
}

export default Newsletter