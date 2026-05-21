import { QRCodeSVG } from "qrcode.react";

const QRCode = () => {
  return (
    <>
      <div className=" bg-[url('/images/footer_background.png')] flex  w-full h-[250px] md:h-[444px] bg-center bg-cover bg-no-repeat justify-center items-center ">
        <div className=" hidden md:flex justify-center items-center bg-white p-4 rounded-lg shadow-lg  ">
          <QRCodeSVG
            value="https://hss.scout.se/"
            size={200} //
            bgColor="var(--color-white)"
            fgColor="var(--color-primary)"
          />
        </div>
      </div>
    </>
  );
};

export default QRCode;
