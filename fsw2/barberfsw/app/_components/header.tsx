import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row">
        <div className="flex flex-row">
          <Image src="/scissor.png" alt="LC Barbers" height={22} width={38} />
          <h1 className="font-bold text-4xl flex uppercase">
            <p className="font-extrabold text-red-800 mr-2">LC </p>Barbers
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
