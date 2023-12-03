import { useState } from "react";
import { Link } from "react-router-dom";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// @sito/ui
import { IconButton, Loading } from "@sito/ui";

// sections
import Password from "./sections/Password";
import NoteTypes from "./sections/NoteTypes";

function Settings() {
  const [sync, setSync] = useState(false);
  return (
    <main className="flex flex-col viewport">
      <div className="p-10 sm:p-3 pt-20 mt-20 flex flex-col gap-10 flex-1">
        <div
          className={`w-10 h-10 fixed bottom-1 left-1 transition-all duration-300 ease-in-out ${
            !sync ? "scale-100" : "scale-0"
          } pointer-events-none`}
        >
          <Loading className="sync rounded-full" strokeWidth="8" />
        </div>
        <div className="flex items-center">
          <Link to="/" name="link-go-back" aria-label="Ir al inicio">
            <IconButton
              tooltip="Ir al inicio"
              name="go-back"
              aria-label="Ir al inicio"
              icon={faChevronLeft}
            />
          </Link>
          <h2 className="text-6xl md:text-5xl sm:text-4xl xs:text-3xl">
            Configuración
          </h2>
        </div>
        <Password />
        <NoteTypes setSync={setSync} />
      </div>
    </main>
  );
}

export default Settings;
