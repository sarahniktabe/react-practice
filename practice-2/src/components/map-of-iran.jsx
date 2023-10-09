import React from "react";

function MapOfIran() {
  const buyersList = [
    {
      id: 1,
      image: "ahvaz.webp",
      name: "روزبه",
      city: "اهواز",
      whatBuy: "ساعت",
      top: "top-[180px]",
      topLg: "lg:top-[360px]",
      right: "right-[195px]",
      rightLg: "lg:right-[390px]",
    },
    {
      id: 2,
      image: "zan2.webp",
      name: "لیلی",
      city: "چالدران",
      whatBuy: "مانتو",
      top: "top-[10px]",
      topLg: "lg:top-[20px]",
      left: "left-[5px]",
      leftLg: "lg:left-[10px]",
      translateX: "-translate-x-[45px]",
      translateXLg: "lg:-translate-x-[90px]",
    },
    {
      id: 3,
      image: "zan1.webp",
      name: "سارا",
      city: "کاشمر",
      whatBuy: "لوازم خانگی",
      top: "top-[90px]",
      topLg: "lg:top-[180px]",
      right: "right-[15px]",
      rightLg: "lg:right-[30px]",
    },
    {
      id: 4,
      image: "kerman.webp",
      name: "علی",
      city: "کرمان",
      whatBuy: "کفش چرم",
      top: "top-[205px]",
      topLg: "lg:top-[410px]",
      right: "right-[35px]",
      rightLg: "lg:right-[70px]",
    },
    {
      id: 5,
      image: "tehran.webp",
      name: "هادی",
      city: "تهران",
      whatBuy: "ادکلن",
      top: "top-[85px]",
      topLg: "lg:top-[170px]",
      right: "right-[158px]",
      rightLg: "lg:right-[316px]",
    },
  ];
  return (
    
    <div className="flex flex-col">
        <div className="flex items-center lg:justify-start">
          <p className="lg:text-4xl text-2xl font-bold text-primary-10">
            به سراسر <span className="text-[#E89B00]">ایران</span> بفروش
          </p>
        </div>
        <div className="flex relative w-[350px] lg:w-[700px] mx-auto">
          <img
            src="/assets/images/homepage/map-of-iran/iran.svg"
            width={350}
            height={0}
            alt="mapofiran"
            className="mt-[32px] lg:w-[700px]"
          />
          </div>
    
     
  );
};

export default MapOfIran;
