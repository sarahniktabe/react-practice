import { mapIranProps } from "./map-iran.iterface";
import Image from "next/image";
import { OrganizationJsonLd, SiteLinksSearchBoxJsonLd } from "next-seo";

const MapOfIranSection = () => {
  const buyersList = [
    {
      id: 1,
      image: "ahvaz.webp",
      name: "نیما",
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
      name: "مهسا",
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
      name: "ریحانه",
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
      name: "بهروز",
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
      name: "حسین",
      city: "تهران",
      whatBuy: "ادکلن",
      top: "top-[85px]",
      topLg: "lg:top-[170px]",
      right: "right-[158px]",
      rightLg: "lg:right-[316px]",
    },
  ];

  return (
    <>
      <OrganizationJsonLd
        name="بازار نخل"
        type="Organization"
        url="http://nakhll.com"
        logo="https://nakhll.com//assets/images/logo/logo-base.svg"
        contactPoint={[
          {
            type: "ContactPoint",
            telephone: "03491001230",
            contactType: "customer service",
            areaServed: "IR",
            availableLanguage: ["Persian"],
          },
        ]}
        sameAs={[
          "https://www.instagram.com/nakhll_com/",
          "https://twitter.com/Nakhll",
        ]}
      />
      <SiteLinksSearchBoxJsonLd
        url="https://nakhll.com/"
        potentialActions={[
          {
            target: "https://nakhll.com/search?keyword=",
            queryInput: "search_term_string",
          },
        ]}
        type="WebSite"
      />
      <div className="flex flex-col">
        <div className="flex items-center lg:justify-start">
          <p className="lg:text-4xl text-2xl font-bold text-primary-10">
            به سراسر <span className="text-[#E89B00]">ایران</span> بفروش
          </p>
        </div>
        <div className="flex relative w-[350px] lg:w-[700px] mx-auto">
          <Image
            src="/assets/images/homepage/map-of-iran/iran.svg"
            width={350}
            height={0}
            alt="mapofiran"
            className="mt-[32px] lg:w-[700px]"
          />
          {buyersList.map((item, index) => {
            return (
              <div
                key={index}
                className={`${"buyer-on-map-" + item.id} absolute ${item.top} ${
                  item.topLg
                }
                                     ${item.right ? item.right : ""}
                                     ${item.rightLg ? item.rightLg : ""}
                                     ${item.left ? item.left : ""}
                                     ${item.leftLg ? item.leftLg : ""}
                                     ${item.translateX ? item.translateX : ""}
                                     ${
                                       item.translateXLg
                                         ? item.translateXLg
                                         : ""
                                     }`}
              >
                <div className="relative w-[120px] h-[95px] lg:w-[240px] lg:h-[176px]">
                  <div className="absolute top-0 right-0 z-50">
                    <img
                      src={`/assets/images/homepage/map-of-iran/map-of-iran-buyers/${item.image}`}
                      className="rounded-full border-2 lg:border-4 border-[#e89d00] lg:w-[110px] lg:h-[110px]"
                      width={55}
                      height={55}
                      alt="mapofiran"
                    />
                  </div>
                  <div className="absolute top-[9px] lg:top-[18px] left-[48px] lg:left-[96px] -translate-x-[50%]">
                    <Image
                      src="/assets/images/homepage/map-of-iran/location-sign.svg"
                      width={35}
                      height={35}
                      className="lg:w-[70px] lg:h-[70px]"
                      alt="mapofiran"
                    />
                  </div>
                  <div className="absolute bg-gray border-2 lg:border-4 border-[#e89d00] rounded-[8px] lg:rounded-2xl p-1 lg:p-4 bottom-0 left-0 text-center w-[130px] lg:w-[192px]">
                    <p className="font-bold text-[12px] lg:text-[16px]">
                      {item.name} هستم از {item.city}
                    </p>
                    <p className="font-bold text-[12px] lg:text-[16px]">
                      خریدار {item.whatBuy}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MapOfIranSection;
