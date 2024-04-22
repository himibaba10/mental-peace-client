import { Button } from "@/components/ui/button";

const PrimaryButton = ({
  children,
  type = "button",
  paddingY = "py-0",
  handleClick = () => {},
  width = "w-auto",
  disabled = false,
}) => {
  return (
    <Button
      disabled={disabled}
      onClick={handleClick}
      type={type}
      className={`bg-primary hover:bg-secondary border-2 border-transparent hover:border-primary hover:text-primary rounded-none uppercase px-6 h-12 text-sm font-extrabold tracking-widest ${paddingY} ${width}`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
