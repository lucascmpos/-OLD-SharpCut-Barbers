import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row">
        <div className="flex flex-row">
          <Image
            src="/scissorlogo.png"
            alt="LC Barbers"
            height={0}
            width={50}
          />
          <h1 className="font-bold text-4xl flex">
            <p className="font-extrabold text-[#8162FF] mr-2">LC </p>BARBERS
          </h1>
        </div>
        <Button variant="outline" size="icon">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
