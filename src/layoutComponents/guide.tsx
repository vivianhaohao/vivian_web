import { Link, useLocation } from "react-router-dom";

export default function Guide() {
  const guideitems = [
    "products","projects", "research", "blogs", "work", "model", "youtube", "anime", "novel"
  ];

  const location = useLocation(); // 获取当前路由路径

  return (
    <div className="
      mt-11 w-full h-[6vh]
      sm:mt-16
      lg:mt-32
      overflow-x-auto px-3 flex gap-5 font-extralight
      scrollbar-hide text-sm items-center
      sm:text-2xl md:h-[8vh] md:text-3xl
      lg:text-3xl lg:h-[12vh] lg:gap-8
      xl:text-4xl xl:h-[14vh] xl:gap-10
    ">
      {guideitems.map((item) => {
        const isActive = location.pathname === `/${item}`;
        return (
          <Link
            to={`/${item}`}
            key={item}
            className={`
              px-2 py-1 rounded-full cursor-pointer
              sm:px-4 sm:py-1 md:py-2 lg:px-5 xl:px-6
              ${isActive 
                ? "bg-[rgba(60,60,60,0.4)]"
                : "hover:bg-[rgba(60,60,60,0.1)]"}
            `}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
