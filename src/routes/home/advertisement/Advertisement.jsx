import React from 'react'
import './Advertisement.scss';
import { Link } from 'react-router-dom';
import Container from '../../../utils/Container';
import { ImArrowRight2 } from 'react-icons/im';
import callaway from '../../../assets/images/advertisement/callaway.png';
import merrell from '../../../assets/images/advertisement/merrell.png';
import specialized from '../../../assets/images/advertisement/specialized.png';
import saveIt from '../../../assets/images/advertisement/save-it.png';
import { v4 as uuidv4 } from 'uuid';

const Advertisement = () => {
  const addsList = [
    "Home", 'Saved', 'Motors', 'Electronics', 'Collectibles', 'Home & Garden', 'Fashion', 'Toys', 'Sporting Goods', 'Business & Industrial', 'Jewelry & Watches', 'eBay Live', 'Refurbished'
  ]

  return (
    <section>
      <Container>
        <ul className='ads-list'>
          {
            addsList.map(item => <li key={uuidv4()}>
              <Link href={'/'}>
                {item}
              </Link>
            </li>)
          }
        </ul>
        <div className='brand-outlet'>
          <div className='brand-outlet__info'>
            <h3>Super savings at the Brand Outlet</h3>
            <p>Up to 60% off the brands you love.</p>
            <button>Shop now <ImArrowRight2 /></button>
          </div>
          <div className='brand-outlet__category'>
            <img src={callaway} alt="advertisement" />
            <img src={merrell} alt="advertisement" />
            <img src={specialized} alt="advertisement" />
          </div>
        </div>

        <div className='save-it-ad'>
          <img src={saveIt} alt="advertisement" />
        </div>
      </Container>
    </section>
  )
}

export default Advertisement;