// async : La suite du code s'exécute sans attendre la reponse 
import { Navigation } from "../components/nav";

export default function ProjectsPage() {
  return (
    <div className="text-zinc-100">
      <Navigation />
      <div className="flex flex-col items-center justify-center mt-32 mb-16 relative ">
        <h2
          className="text-4xl text-gray-100 duration-500 font-display sm:text-6xl md:text-7xl"
          style={{ fontFamily: "Phosphate, sans-serif" }}
        >
          projets

        </h2>
      </div>

    </div>
  )

}
