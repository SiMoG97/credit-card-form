import cardLogo from "../assets/card-logo.svg";
import { FormType } from "../formSchema";

type LeftSideProps = FormType;
export default function LeftSide({
  cardHolderName,
  cardNumber,
  cvc,
  month,
  year,
}: LeftSideProps) {
  return (
    <div className="flex w-full  flex-col  items-center  justify-start  bg-[url('./assets/bg-main-mobile.png')] bg-[length:100%_70%] bg-no-repeat px-2 pt-8 text-grayviolet-200 md:h-full md:w-1/3 md:min-w-80  md:justify-center  md:gap-8  md:bg-[url('./assets/bg-main-desktop.png')] md:bg-cover  md:bg-center  md:p-5 lg:items-end lg:p-0">
      {/* front card starts here */}
      <div className=" z-10 order-1 aspect-[1.82448] w-3/4  max-w-96 translate-x-[-12.5%]  translate-y-[-44%] bg-[url('./assets/bg-card-front.png')] bg-contain  bg-no-repeat text-[1rem] text-lg font-light uppercase shadow-2xl @container md:static md:order-none md:w-full  md:max-w-[500px] md:translate-x-0  md:translate-y-0 lg:translate-x-1/4">
        <div
          className="flex h-full flex-col justify-between p-[5.5cqi]
            "
        >
          <div>
            <img className="w-[23cqi]" src={cardLogo} alt="logo" />
          </div>
          <div className="flex flex-col gap-[5cqi] leading-none">
            <div className=" text-[7.3cqi] tracking-wider">
              {cardNumber ? cardNumber : "0000 0000 0000 0000"}
            </div>
            <div className="flex justify-between text-[3.5cqi] tracking-wider">
              <span>{cardHolderName ? cardHolderName : "JANE APPLESEED"}</span>
              <DateFormater
                month={(month || "").toString()}
                year={(year || "").toString()}
              />
            </div>
          </div>
        </div>
      </div>
      {/* front card ends here */}
      {/* back card starts here */}
      <div className="relative aspect-[1.82448] w-3/4 max-w-96 translate-x-[12.5%] bg-[url('./assets/bg-card-back.png')] bg-contain bg-no-repeat shadow-2xl @container md:static md:order-none md:w-full md:max-w-[500px] md:translate-x-0             md:translate-y-0            lg:translate-x-1/4            xl:translate-x-1/2">
        <span className="absolute right-[14cqi] top-[24cqi] text-[4cqi]">
          {cvc ? cvc : "000"}
        </span>
      </div>
      {/* back card ends here */}
    </div>
  );
}
function DateFormater({ month, year }: { month?: string; year?: string }) {
  if (month && month.length != 2) {
    month = `0${month}`;
  }
  if (year && year.length != 2) {
    year = `0${year}`;
  }
  return (
    <span>
      {month ? month : "00"}/{year ? year : "00"}
    </span>
  );
}
