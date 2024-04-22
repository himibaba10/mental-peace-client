import { Button } from "@/components/ui/button";

const SecondaryButton = ({
  children,
  width = "w-auto",
  onClick = () => {},
  type = "button",
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`bg-secondary hover:bg-primary border-2 border-primary text-primary hover:text-secondary rounded-none uppercase px-6 h-12 text-sm font-extrabold tracking-widest ${width}`}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
