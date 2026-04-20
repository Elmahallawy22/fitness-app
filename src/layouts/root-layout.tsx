import { useParams, Outlet, Navigate } from "react-router-dom";
import { IntlProvider } from "use-intl";
import enMessages from "../messages/en.json";
import arMessages from "../messages/ar.json";
<<<<<<< HEAD
import Navbar from "../app/Home/Navbar/Navbar";
import ChatBoot from "@/Components/shared/chat-boot/chat-boot";
=======
import ChatBoot from "@/components/layout/chat-boot";
import Navbar from "@/components/layout/navbar";
>>>>>>> 78bae948868b0356a957dff3222a8fe8cf8c6f89

const messagesMap: Record<string, any> = {
  ar: arMessages,
  en: enMessages,
};

export default function RootLayout() {
  const { locale } = useParams();

  if (!locale || !messagesMap[locale]) {
    return <Navigate to="/en" replace />;
  }
  return (
    <IntlProvider messages={messagesMap[locale]} locale={locale}>
      <header className="mb-[82.56px]">
        <Navbar />
      </header>
      <main
        className="min-h-screen w-full bg-background text-foreground"
<<<<<<< HEAD
        dir={locale === "ar" ? "rtl" : "ltr"}>
=======
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
>>>>>>> 78bae948868b0356a957dff3222a8fe8cf8c6f89
        <div>
          <ChatBoot />
          <Outlet />
        </div>
      </main>
    </IntlProvider>
  );
}
