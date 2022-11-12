import { GiGiftOfKnowledge } from 'react-icons/gi'
import skills1, {skills2} from './skillsList'
import Carousel from './Carousel';
import SectionTitle from '../General/SectionTitle';


const Skills = () => {

  const options = {
    perPage: 1,
    height: '8rem',
    type: 'loop',
    autoplay: true,
    gap: '3rem',
    pauseOnHover: false,
    arrows: false,
    pagination: false,
    autoWidth: true,
    autoHeight: true,
    speed: 14000,
    perMove: 1,
    rewind: false,
    easing: 'linear',
    interval: 0,
    lazyLoad: 'sequential',
  }

  return (
    <div className="w-full" name='skills'>
      <div className='pb-20 px-4 md:px-20 lg:px-36'>
        <SectionTitle icon={<GiGiftOfKnowledge size="28" />} text='Skills' />
        <div className='w-full overflow-hidden'>
          <Carousel skills={skills1} options={{...options, direction:'rtl'}}/>
          <Carousel skills={skills2} options={{...options, direction:'ltr'}}/>
        </div>
      </div>
    </div>
  )
}

export default Skills