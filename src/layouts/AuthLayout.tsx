import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-1/2 flex justify-center items-center">
        auth sidebar
      </aside>
      <main className="w-1/2 px-20 py-5">
        <Outlet />
      </main>
    </div>
  );
}
