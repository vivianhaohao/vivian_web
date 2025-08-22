import {Link} from "react-router-dom";

export default function Head() {
  return (
    <div className="relative w-full">
      <div className="relative w-full
        h-[26vh] sm:h-[33vh] md:h-[38vh] lg:h-[68vh] xl:h-[68vh]">
        <img
          src="/layoutResource/bg2.jpg"
          alt=""

          className="w-full h-full object-cover border-b-2"
        />


        <div className="
          absolute z-20
          left-4 -bottom-10 sm:left-6 sm:-bottom-20
          md:left-8 md:-bottom-24 lg:left-10 lg:-bottom-24 xl:left-11 xl:-bottom-35
          h-[11vh] w-[11vh] sm:h-[14vh] sm:w-[14vh]
          md:h-[16vh] md:w-[16vh] lg:h-[28vh] lg:w-[28vh] xl:h-[29vh] xl:w-[29vh]
          flex justify-center items-center overflow-hidden
        ">
          <Link to="projects">
            <img
            src="/layoutResource/photo.jpg"
            alt=""
            className="h-full w-full rounded-full border-2 "
          />
          </Link>

        </div>
      </div>
    </div>
  );
}
