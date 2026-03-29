import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <aside className="w-1/2 h-full flex justify-center items-center border-e min-h-screen">
        auth sidebar
      </aside>
      <main className="w-1/2 px-20 py-5 bg-transbarent">
        <Outlet />
      </main>
    </div>
  );
}
