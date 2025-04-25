import Category from "@/components/Category";
import Statistics from "@/components/Statistics";
import Wellcome from "@/components/Wellcome";

export default function Home() {
  return (
<div>
  <Wellcome />
  <Statistics/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  
  <Category />


  <div className="h-96 w-full"></div>
</div>

  );
}
