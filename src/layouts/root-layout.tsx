import { useParams, Outlet, Navigate } from "react-router-dom";
import { IntlProvider } from "use-intl";
import enMessages from "../messages/en.json";
import arMessages from "../messages/ar.json";
import ChatBoot from "../components/layout/chat-bot";
import Navbar from "../components/layout/navbar";

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
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div>
          <ChatBoot />
          <Outlet />
        </div>
      </main>
    </IntlProvider>
  );
}
