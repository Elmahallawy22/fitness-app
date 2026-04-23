import { useParams, Outlet, Navigate } from "react-router-dom";
import { IntlProvider } from "use-intl";
import enMessages from "../messages/en.json";
import arMessages from "../messages/ar.json";
import SmartCoach from "@/components/ui/chat-bot/chat-bot";
import Navbar from "@/app/home/Navbar/Navbar";

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
      <main
        className="min-h-screen w-full bg-background text-foreground"
        dir={locale === "ar" ? "rtl" : "ltr"}>
        
        <div className="py-8">
          <SmartCoach />
          <Navbar />
          <Outlet />
        </div>
      </main>
    </IntlProvider>
  );
}
