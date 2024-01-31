import { Button } from "@/components/ui/button";

const PrimaryButton = ({ children }) => {
  return (
    <Button className="bg-primary hover:bg-secondary border-2 border-transparent hover:border-primary hover:text-primary rounded-none uppercase px-6 h-12 text-sm font-extrabold tracking-widest">
      {children}
    </Button>
  );
};

export default PrimaryButton;
