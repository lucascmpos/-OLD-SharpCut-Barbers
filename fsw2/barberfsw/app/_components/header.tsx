"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
  const { data } = useSession();

  const handleLoginClick = () => signIn("google");
  const handleLogoutClick = () => signOut();
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row">
        <div className="flex flex-row">
          <Image src="/scissor.png" alt="LC Barbers" height={22} width={38} />
          <h1 className="font-bold text-4xl flex uppercase">
            <p className="font-extrabold text-red-800 mr-2">LC </p>Barbers
          </h1>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SheetHeader className="text-left border-b border-solid border-secondary p-5">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
              <div className="flex justify-between px-5 py-6 items-center">
                <div className="flex items-center gap-3 ">
                  <Avatar>
                    <AvatarImage src={data.user?.image ?? ""} />
                  </Avatar>

                  <h2 className="font-bold">{data.user.name}</h2>
                </div>
                <Button
                  onClick={handleLogoutClick}
                  variant="secondary"
                  size="icon"
                >
                  <LogOutIcon />
                </Button>
              </div>
            ) : (
              <div className="flex flex-col px-5 py-6 gap-3">
                <div className="flex items-center gap-2 ">
                  <UserIcon size={32} />
                  <h2 className="font-bold">Olá, faça seu login!</h2>
                </div>
                <Button
                  onClick={handleLoginClick}
                  className="w-full justify-start"
                  variant="secondary"
                >
                  <LogInIcon className="mr-2" size={18} />
                  Login
                </Button>
              </div>
            )}

            <div className="flex flex-col gap-3 px-5">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/">
                  <HomeIcon size={18} className="mr-2" />
                  Início
                </Link>
              </Button>

              {data?.user && (
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/bookings">
                    <CalendarIcon size={18} className="mr-2" />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
