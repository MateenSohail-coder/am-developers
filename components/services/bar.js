"use client";

const Bar = ({ desktopText, mobileText, id, arrow = true }) => {
  return (
    <div id={id} className="w-full">
      <div
        className="
          relative w-full h-25 sm:h-35 
          bg-gradient-to-r from-[#f2445a] to-[#e23f3f] 
          flex items-center md:gap-20 px-8 sm:px-20 
          text-white text-3xl sm:text-4xl lg:text-6xl font-bold 
          border-4 border-[#d10000]           
          border-r-0 border-l-0
          shadow-[0_4px_0_#8b0000] 
          translate-x-0 translate-y-0
          transition-all duration-200 
          rounded-none origin-bottom-right
        "
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        <p className="block md:hidden ">{mobileText}</p>
        <p className="hidden md:block">{desktopText}</p>

        {/* arrow container – unchanged */}
        {arrow && (
          <div className="rotate-3">
            <div className="ml-8 flex-1 flex items-start justify-start">
              <div className="relative inline-flex items-center">
                {/* line */}
                <span className="block h-[7px] sm:h-[10px] w-20 sm:w-64 rounded-l-full bg-white" />
                {/* arrow head (slightly tilted) */}
                <span
                  className="block w-0 h-0 md:border-t-[18px] md:border-b-[18px] md:border-l-[28px] border-t-[12px] border-b-[12px] border-l-[22px]
                    border-t-transparent border-b-transparent border-l-white
                  "
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bar;
