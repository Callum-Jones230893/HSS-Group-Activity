"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { locationsData, LocationItem } from "@/data/googlemap";

const GoogleMapLocation = () => {
  const t = useTranslations("googlemap");
  const [selectLoctioan, setSelectLoctioan] = useState<LocationItem>(
    locationsData[0],
  );
  const googleMap = `https://maps.google.com/maps?q=${selectLoctioan.lat},${selectLoctioan.lng}&z=15&output=embed`;

  return (
    <div className="w-full bg-primary flex justify-center items-center min-h-screen">
      <div className="w-full max-w-383.75 lg:max-h-144.5 mx-7 lg:mx[128px] my-4 lg:my-13 bg-white rounded-2xl p-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <h4 className="text-secondary font-primary text-paragraph font-medium tracking-tight  leading-8">
                {t("emailLabel")}
              </h4>
              <a
                href="mailto:info@planb.rehab"
                className="text-primary text-paragraph font-primary  leading-8 tracking-tight"
              >
                info@planb.rehab
              </a>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary font-primary text-paragraph font-medium tracking-tight leading-8">
                {t("findUsLabel")}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {locationsData.map((loc) => {
                const isActive = selectLoctioan.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectLoctioan(loc)}
                    className="text-left cursor-pointer  h-full "
                  >
                    <div
                      className={`text-primary text-lg font-primary leading-8 tracking-tight min-h-40 ${
                        isActive
                          ? " font-bold shadow-lg bg-primary/5 rounded-2xl py-2 px-2"
                          : " font-normal"
                      }`}
                    >
                      <span className="font-bold block">
                        {" "}
                        {t(`locations.${loc.id}.title`)}
                      </span>

                      <p className="mt-1 text-sm leading-6">
                        {t(`locations.${loc.id}.description`)}
                      </p>

                      <span className="text-xs opacity-60 block mt-2">
                        ({loc.lat.toFixed(4)}, {loc.lng.toFixed(4)})
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-87.5 md:h-auto min-h-100  overflow-hidden relative bg-white">
          <iframe
            key={selectLoctioan.id}
            title={`Map pointing to ${t(`locations.${selectLoctioan.id}.title`)}`}
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
