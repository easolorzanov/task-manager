import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-red-500 flex justify-center items-center">
      <header className="bg-zinc-800 p-10">
        <h1 className="text-5xl py-2 font-bold">Task Manager</h1>
        <p className="text-md text-slate-400">
          Discover a smarter, more effective way to organize your life and maximize your productivity. With our task management platform, you'll be able to plan, track, and complete your tasks more efficiently than ever.
        </p>

        <Link
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/register"
        >
          Get Started
        </Link>
      </header>
    </section>
  );
}

export default HomePage;
