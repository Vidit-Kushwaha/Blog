import React from 'react'

const FearturedArticleCard = () => {
  return (
    <>
      <div className="font-nunito-sans relative h-[25rem] w-full shrink-0 overflow-hidden rounded-2xl bg-white text-left text-[0.88rem] text-white shadow-[0px_9px_18px_rgba(3,_0,_92,_0.1),_0px_1px_7px_rgba(3,_0,_92,_0.03)]">
        <div className="absolute bottom-[75%] left-[0%] right-[0%] top-[0%] h-1/4 w-full [background:linear-gradient(180deg,_rgba(39,_51,_57,_0.5),_rgba(39,_51,_57,_0))]" />
        <div className="absolute bottom-[-50%] left-[0%] right-[0%] top-[100%] h-3/6 w-full [background:linear-gradient(180deg,_rgba(39,_51,_57,_0.8),_rgba(39,_51,_57,_0))]" />
        <div className="font-montserrat absolute left-[2rem] top-[2rem] flex h-[1rem] w-[11.47rem] items-center font-extrabold uppercase leading-[1rem] tracking-[1.68px]">
          Builder Spotlight
        </div>
        <div className="absolute left-[2rem] top-[18rem] h-[5rem] w-[19.5rem] text-[2.25rem]">
          <div className="absolute left-[0rem] top-[-0.31rem] flex h-[5.56rem] w-[13.73rem] items-center font-black leading-[2.5rem] tracking-[-0.18px]">
            <span className="w-full">
              <p className="m-0">Meet Sarang</p>
              <p className="m-0">Parikh</p>
            </span>
          </div>
        </div>
        <div className="absolute left-[0rem] top-[0rem] h-[25rem] w-[23.5rem] overflow-hidden bg-cover bg-[top] bg-no-repeat text-[1.94rem]">
          <div className="absolute left-[0rem] top-[5.75rem] h-[19.25rem] w-[23.5rem] [background:linear-gradient(0deg,_rgba(39,_51,_57,_0.8),_rgba(39,_51,_57,_0))]">
            <div className="absolute left-[2rem] right-[2rem] top-[2rem] h-[9rem] w-[calc(100%_-_64px)]">
              <div className="absolute left-[0rem] top-[3.69rem] flex h-[5.56rem] w-[15.75rem] items-center font-black leading-[2.25rem] tracking-[-0.18px]">
                Featured articles
              </div>
            </div>
            <div className="absolute left-[2rem] right-[2rem] top-[12rem] h-[5.25rem] w-[calc(100%_-_64px)] text-[1.13rem]">
              <div className="absolute left-[0rem] top-[0.13rem] flex h-[5rem] w-[16.72rem] items-center font-semibold leading-[1.75rem]">
                <span className="w-full">
                  <p className="m-0">Indulge in the hottest events</p>
                  <p className="m-0">happening around the globe and</p>
                  <p className="m-0">mellow out.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FearturedArticleCard
