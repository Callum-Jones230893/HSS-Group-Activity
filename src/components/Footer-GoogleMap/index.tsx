"use client";

import React, { useState } from "react";

type LocationItem = {
  id: string;
  title: string;
  description: string;
  lat: number;
  lng: number;
};

const locationsData: LocationItem[] = [
  {
    id: "myset",
    title: "Hajkstugan Myset",
    description:
      "Vår mysiga stuga i skogen som används för övernattningar, hajk och landbaserade aktiviteter.",
    lat: 59.39712767997542,
    lng: 17.769832196692757,
  },
  {
    id: "ruffen",
    title: "Studentkårsrummet",
    description:
      "Detta är vår huvudsakliga plats vid vattnet, där vi håller våra veckomöten.",
    lat: 59.36328435188759,
    lng: 17.822173946489528,
  },
  {
    id: "shipyard",
    title: "Varvet",
    description:
      "Detta är vårt båtvarv där vi utför underhåll, reparationer och vinterförvaring. ",
    lat: 59.34847,
    lng: 17.662799,
  },
  {
    id: "boat-club",
    title: "Båtklubben",
    description:
      "Här har vi våra hamnplatser för kårens större båtar under sommarhalvåret.",
    lat: 59.357539,
    lng: 17.834306,
  },
];

const GoogleMapLocation = () => {
  const [selectLoctioan, setSelectLoctioan] = useState<LocationItem>(
    locationsData[0],
  );
  const googleMap = `https://maps.google.com/maps?q=${selectLoctioan.lat},${selectLoctioan.lng}&z=15&output=embed`;

  return (
    <div className="w-full bg-primary flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[1535px] lg:max-h-[578px] mx-[28px] lg:mx[128px] my-[16px] lg:my-[52px] bg-white rounded-2xl p-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <h4 className="text-secondary font-primary text-lg  font-medium tracking-tight  leading-8">
                Epost
              </h4>
              <a
                href="mailto:info@planb.rehab"
                className="text-primary text-lg  font-primary  leading-8 tracking-tight"
              >
                info@planb.rehab
              </a>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary font-primary text-lg  font-medium tracking-tight  leading-8">
                Hitta till oss
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {locationsData.map((loc) => {
                const isActive = selectLoctioan.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectLoctioan(loc)}
                    className="text-left cursor-pointer   "
                  >
                    <div
                      className={`text-primary text-lg  font-primary leading-8 tracking-tight ${
                        isActive
                          ? " font-bold shadow-lg bg-primary/5 rounded-2xl py-2 px-2"
                          : " font-normal"
                      }`}
                    >
                      <span className="font-bold"> {loc.title}</span>

                      <p>{loc.description}</p>

                      <span>
                        ({loc.lat.toFixed(2)}, {loc.lng.toFixed(2)})
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[350px] md:h-auto min-h-[400px]  overflow-hidden relative bg-white">
          <iframe
            key={selectLoctioan.id}
            title={`Map pointing to ${selectLoctioan.title}`}
            src={googleMap}
            className="w-full h-full border-0 absolute inset-0 rounded-lg"
            allowFullScreen
            width="684"
            height="474"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleMapLocation;
