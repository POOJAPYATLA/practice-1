import { FaBeer, FaMapMarkerAlt } from "react-icons/fa";


interface BarCardProps {
    name: string;
  image: string;
  logo: string;
  rating: string;
  price: string;
  address: string;
  tags: string[];
  className:string;
  priceClass:string;
  nameClass:string;
  addressClass:string
  }
  
  export default function BarCard({ image, name, rating,logo ,price,address,tags,className,priceClass,nameClass,addressClass }: BarCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[270px]">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 text-sm flex items-center gap-1 shadow">
          <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
          <span className="text-gray-600">({rating})</span>
        </div>
        <div className="absolute top-2 right-2">
          <button className=" p-2 shadow hover:bg-gray-100">
            ❤️
          </button>
        </div>
      </div>

      <div className={className}>
        <div className="flex items-center gap-3 mb-1">
          <img src={logo} alt="logo" className="absolute top-[-24] w-14 h-14 rounded-md shadow border border-white" />
          <div className={priceClass}>
            <FaBeer className='mr-2' /> {price}
          </div>
        </div>
        <h3 className={nameClass}>{name}</h3>
        <div className={addressClass}>
          <div className="w-5 h-5 bg-white text-black  flex items-center justify-center rounded-full mr-2"> <FaMapMarkerAlt className="" /></div>
         
          {address}
        </div>
        <div className="flex flex-wrap gap-2">
        <div className="w-5 h-5 bg-white text-black  flex items-center justify-center rounded-full "> <FaMapMarkerAlt className="" /></div>
          {tags.map((tag, i) => (
            
             <span
              key={i}
              className="bg-white text-sm px-3 py-1 rounded-md shadow text-gray-700"
            >
              {tag}
            </span>
           
          ))}
        </div>
      </div>
    </div>
    );
  }
  