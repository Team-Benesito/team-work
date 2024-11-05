// @sito/ui
import { Loading } from "@sito/ui";

function Syncing() {
  return (
    <Loading
      className="sync rounded-full !bg-[#00000000]"
      strokeWidth="6"
      color="secondary"
    />
  );
}

export default Syncing;
