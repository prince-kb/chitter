import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="dark:bg-blue-700 bg-blue-100 gap-4 flex justify-center ">
      <h1 className="text-6xl font-semibold ">CHITTER-CHATTER</h1>
      <ThemeSwitcher />
    </div>
  );
}
