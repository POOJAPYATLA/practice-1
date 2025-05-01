import Banner from "@/components/Homepage/Banner";
import Banner2 from "@/components/Homepage/Banner2";
import Blogs from "@/components/Homepage/Blogs";
import CheersBanner from "@/components/Homepage/CheersBanner";
import Events from "@/components/Homepage/Events";
import HeroWithOverlay from "@/components/Homepage/HeroWithOverlat";
import PopularBars from "@/components/Homepage/PopularBars";
import PopularClubs from "@/components/Homepage/PopularClubs";
import PopularDestinations from "@/components/Homepage/PopularDestination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
   <div >
<Banner />
<PopularDestinations/>
<CheersBanner/>
<PopularBars/>
<HeroWithOverlay/>
<PopularClubs/>
<Events />
<Banner2/>
<Blogs/>

   </div>
  );
}
