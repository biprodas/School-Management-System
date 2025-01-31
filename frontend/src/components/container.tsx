import { cn } from "~/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "", children }) => {
  return (
    <div
      className={cn(
        "min-w-[320px] max-w-[2520px] mx-auto px-3 md:px-10 xl:px-20 2xl:p-0 2xl:w-[90%]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
