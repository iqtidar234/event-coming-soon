import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({ duration: 3000 });
  return (
    <div className="relative w-full text-center  h-screen bg-[url('/hero.webp')] bg-cover bg-top flex justify-start items-center flex-col">
      <img
        src="/vite.webp"
        alt=""
        className="w-28 m-auto h-auto self-start mt-4"
      />
      <img
        src="/hero-text.webp"
        alt=""
        className="w-full m-auto h-auto"
        data-aos="fade-up"
      />
    </div>
  );
}

export default App;
