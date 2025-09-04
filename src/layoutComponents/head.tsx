import {Link} from "react-router-dom";
import Record from "./music_record.tsx"

export default function Head() {
  return (
    <div className="relative w-full bg-black">
      <div className="relative w-full
        h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[53vh] xl:h-[52vh] border-b-2 ">
          
          <img src="/layoutResource/2.jpg" alt="" className="object-cover h-full w-full"/>
          

        <div className="
          absolute z-20
          left-4 -bottom-8 sm:left-6 sm:-bottom-16
          md:left-8 md:-bottom-20 lg:left-10 lg:-bottom-16 xl:left-11 xl:-bottom-24
          h-[10vh] w-[10vh] sm:h-[12vh] sm:w-[12vh]
          md:h-[14vh] md:w-[14vh] lg:h-[22vh] lg:w-[22vh] xl:h-[23vh] xl:w-[23vh]
          flex justify-center items-center overflow-hidden
        ">
          <Link to="product">
            <img
            src="/layoutResource/photo.jpg"
            alt=""
            className="h-full w-full rounded-full border-2  "
          />
          </Link>

        </div>
        
      </div>
    </div>
  );
}
