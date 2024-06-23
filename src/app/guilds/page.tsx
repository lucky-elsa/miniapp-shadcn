import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-[url('/background.jpg')] bg-cover">
      <div className="fixed top-0 left-0 bg-black/30 w-full min-h-screen"></div>
      <span>this is guilds page</span>
      <Navbar />
    </main>
  );
}
