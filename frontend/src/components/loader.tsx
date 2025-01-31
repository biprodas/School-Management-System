import { LuLoader } from "react-icons/lu";

interface Props {
  mode?: "text" | "icon";
}

const Loader = ({ mode = "text" }: Props) => {
  return mode === "text" ? (
    <div>Loading...</div>
  ) : (
    <LuLoader className="size-6 text-slate-700 animate-spin" />
  );
};

export default Loader;
