import React from 'react'
import './HoodieCollection.scss'
import hoodieImage1 from '../../assets/HoodieImg1.jpg';
import hoodieImage2 from '../../assets/HoodieImg2.jpg';
import hoodieImage3 from '../../assets/HoodieImg3.jpg';

function HoodieCollection() {
  return (
    <section className='hoodie-collection'>
        <div className="hoodie-card">
        <img src={hoodieImage1} alt="Slate Blue Hoodie" />
        
        <button>Slate Blue Hoodie</button>
        </div>
        <div className="hoodie-card">
        <img src={hoodieImage2} alt="Glacier Grey Hoodie" />
        
        <button>Glacier Grey Hoodie</button>
        </div>
        <div className="hoodie-card">
        <img src={hoodieImage3} alt="Aqua Blue Hoodie" />
        <button>Aqua Blue Hoodie</button>
        </div>

    </section>
  )
}

export default HoodieCollection
