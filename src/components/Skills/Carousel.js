import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Carousel = ({skills, options}) => {

  return (
    <div>
      <Splide
        options={ options }
        aria-label="skills"
        className='mb-4 md:mb-8 lg:mb-10'
      >
        { skills.map( (slide) => {

            return (
            <SplideSlide key={ slide.id } className="flex flex-col justify-start items-center">

                <img className='text-center' src={ slide.image } alt={ slide.name } width='80' height='80' data-splide-lazy={ slide.image }/>
                <span className='text-center'>{slide.name}</span>

            </SplideSlide>
            )

          })
        }
      </Splide>
    </div>
  )
}

export default Carousel