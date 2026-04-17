// import Satr from "../../../assets/Images/star.png";

// const items = [
//   "Live Classes",
//   "Outdoor & Online Trainers",
//   "Personal Training",
// ];

// export default function ScrollingTicker() {
//   return (
//     <div className="w-screen overflow-hidden bg-orange-500 py-3">
//       <div className="flex w-max animate-marquee items-center gap-6 text-white">
//         {[...items, ...items].map((item, i) => (
//           <div key={i} className="flex  items-center gap-4 text-sm font-medium">
//             <span className="font-bold leading-9 text-2xl uppercase">
//               {item}
//             </span>
//             <img src={Satr} alt="star" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Satr from "../../../assets/Images/star.png";
import { useParams } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function ScrollingTicker() {
  // Directions
  const { locale } = useParams();
  const isRTL = locale === "ar";

  // Translations
  const t = useTranslations("scrolling-ticker");

  // Items
  const items = [t("first-line"), t("second-line"), t("third-line")];

  return (
    <div className="w-screen overflow-hidden bg-orange-500 py-3">
      <div
        className={`flex w-max items-center gap-6 text-white ${
          isRTL ? "animate-marquee-rtl" : "animate-marquee-ltr"
        }`}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 text-sm font-medium">
            <span className="font-bold leading-9 text-2xl uppercase">
              {item}
            </span>
            <img src={Satr} alt="star" />
          </div>
        ))}
      </div>
    </div>
  );
}
