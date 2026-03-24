import { useParams, Outlet, Navigate } from "react-router-dom";
import { IntlProvider } from "use-intl";
import enMessages from "../messages/en.json";
import arMessages from "../messages/ar.json";

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
        className="min-h-screen bg-background text-foreground"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <nav className="p-4 border-b flex justify-between items-center">
          <span>Fitness App</span>
        </nav>

        <div className="container mx-auto py-8">
          <Outlet />
        </div>
      </main>
    </IntlProvider>
  );
}
