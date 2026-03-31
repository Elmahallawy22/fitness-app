import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="p-4 border-b flex justify-between items-center">
        <span>Fitness App</span>
      </nav>

      <div className="container mx-auto py-8">
        <Outlet />
      </div>
    </main>
  );
}
