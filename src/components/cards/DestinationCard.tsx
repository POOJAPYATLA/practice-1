import React from 'react';


interface Stat {
    value: string;
    icon: string;
  }

interface DestinationCardProps {
    id:number;
  image: string;
  name: string;
  location: string;
  stats: Stat[];
}

const DestinationCard: React.FC<DestinationCardProps> = ({id, image, name, location ,stats }) => {
  return (
   
     <div key={id} className="max-w-md rounded-4xl overflow-hidden shadow-xl bg-white ">
      <img className="w-full h-48 object-cover p-3 rounded-4xl" src={image} alt={name} />

<div className='px-5 pb-3'>
<p>{name} | <span className='text-gray-400'>{location}</span></p>
      
      <div className="flex gap-4">
         {stats.map((stat, index) => (
           <div key={index} className="text-sm  flex items-center gap-1 text-red-500">
             <div className='w-8 h-8 border flex justify-center items-center rounded-full mt-5'>
             <span>{stat.icon}</span>
                </div>
            
            
             <span className='mt-5'>{stat.value}</span>
            
            
           </div>
         ))}
       </div>
</div>
       
    </div>   
    
    
  );
};

export default DestinationCard;
