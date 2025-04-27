import Brands from "@/components/Brands";
import Category from "@/components/Category";
import Special from "@/components/Special";
import Statistics from "@/components/Statistics";
import Wellcome from "@/components/Wellcome";
import AboutUs from "@/components/AboutUs";
import Articles from "@/components/Articles";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
<div>
  <Wellcome />
  <Statistics/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  
  <Category />
  <Special typecomponent="new" />
  <Brands />
  <Special typecomponent="discount" />
  <AboutUs />
  <Articles/>
  <Instagram/>


  {/* <div className="h-96 w-full"></div> */}
</div>

  );
}
