import {Link} from "react-router-dom";

export default function Head() {
  return (
    <div className="relative w-full">
      <div className="relative w-full
        h-[23vh] sm:h-[33vh] md:h-[38vh] lg:h-[64vh] xl:h-[66vh]">
        <img
          src="/layoutResource/11.jpg"
          alt=""

          className="w-full h-full object-cover"
        />


        <div className="
          absolute z-20
          left-4 -bottom-12 sm:left-6 sm:-bottom-20
          md:left-8 md:-bottom-24 lg:left-10 lg:-bottom-30 xl:left-11 xl:-bottom-35
          h-[13vh] w-[13vh] sm:h-[16vh] sm:w-[16vh]
          md:h-[18vh] md:w-[18vh] lg:h-[30vh] lg:w-[30vh] xl:h-[29vh] xl:w-[29vh]
          flex justify-center items-center overflow-hidden
        ">
          <Link to="projects">
            <img
            src="/layoutResource/1.jpg"
            alt=""
            className="h-full w-full rounded-full border-2"
          />
          </Link>

        </div>
      </div>
    </div>
  );
}
