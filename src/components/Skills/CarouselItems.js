
const CarouselItems = ({item}) => {
  return (
    <div className="flex flex-col items-center justify-end w-[200px] h-[150px] pr-24 box-border">
      <img className="" src={item.image} alt={item.name} />
      <h4 className="text-lg">{item.name}</h4>
    </div>
  )
}

export default CarouselItems