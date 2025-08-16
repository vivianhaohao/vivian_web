
export default function Tail(){
    return (
        <div className="flex flex-col px-2 py-2
        sm:px-3 sm:py-3
        md:flex-row md:justify-between md:items-center
        ">

            <div className="text-[rgba(60,60,60)] text-sm py-1
            sm:text-xl sm:py-2 md:text-2xl xl:text-3xl
            ">
                &copy; <span className="year">2024-2025</span> &ensp;&ensp;All rights reserved.
            </div>

            <div className="text-[rgba(60,60,60)] text-sm flex gap-3
            sm:text-xl sm:gap-4 md:text-2xl lg:gap-6 xl:text-3xl xl:gap-8
            ">
                        <a href="">
                            <span className="iconfont icon-x
                        hover:text-[rgba(60,60,60,0.8)]
                        "></span>
                        </a>
                        <a href="">
                            <span className="iconfont icon-github
                        hover:text-[rgba(60,60,60,0.8)]
                        "></span>
                        </a>
                        <a href="">
                            <span className="iconfont icon-email
                        hover:text-[rgba(60,60,60,0.8)]
                        "></span>
                        </a>
                        <a href="">
                            <span className="iconfont icon-linkedin
                        hover:text-[rgba(60,60,60,0.8)]
                        "></span>
                        </a>
                        <a href="">
                            <span className="iconfont icon-blog
                        hover:text-[rgba(60,60,60,0.8)]
                        "></span>
                        </a>
                        <a href="">
                            <span className="iconfont icon-whatsapp
                        hover:text-[rgba(60,60,60,0.8)]
                        "></span>
                        </a>
                        <a href="">
                            <span className="iconfont icon-telegram
                        hover:text-[rgba(60,60,60,0.8)]
                        "></span>
                        </a>
                        <a href="">
                            <span className="iconfont icon-youtube
                        hover:text-[rgba(60,60,60,0.8)]
                        "></span>
                        </a>
            </div>
        </div>
    )
}