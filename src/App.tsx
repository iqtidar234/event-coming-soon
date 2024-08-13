import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({ duration: 3000 });
  return (
    <div className="relative w-full text-center  h-screen bg-[url('/hero.webp')] bg-cover bg-top  justify-center items-center flex-col overflow-hidden">
      <img
        src="/vite.webp"
        alt=""
        className="w-28 mx-auto h-auto self-start mt-4"
      />
      <div className="flex justify-center items-center flex-col h-full w-full">
        <img
          src="/hero-text.webp"
          alt=""
          className="w-full mx-auto h-auto place-self-start"
          data-aos="fade-up"
        />
        <div className="text-white text-sm rounded-md px-3 py-2 bg-white/10 backdrop-blur-sm flex justify-center items-center flex-col border border-white/90 mb-8">
          <h1 className="opacity-80">For Queries and Registration</h1>
          <div>
            <a
              href="mailto:Zain@endure.evnets"
              className="text-sm underline hover:text-orange-400"
            >
              Zain@endure.evnets
            </a>{" "}
            OR{" "}
            <a
              href="mailto:Zain@endure.pk"
              className="text-sm underline hover:text-orange-400"
            >
              Zain@endure.pk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
