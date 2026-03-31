import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* // Navbar */}
      <nav></nav>

      {/* // Main Content  */}
      <main>
        <Outlet />
      </main>

      {/* // Footer  */}
      <footer></footer>
    </main>
  );
}
