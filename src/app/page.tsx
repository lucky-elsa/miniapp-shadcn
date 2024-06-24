import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="fixed top-0 left-0 bg-black/40 w-full min-h-screen"></div>
      <Navbar />
    </main>
  );
}
