import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    // TODO: redirecionar para home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    // TODO: redirecionar para home page
    return null;
  }

  return;
  <div>
    <div className="h-[250px] w-full relative">
      <Button
        size="icon"
        variant="outline"
        className="z-50 absolute top-4 left-4"
      >
        <ChevronLeftIcon />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="z-50 absolute top-4 right-4"
      >
        <MenuIcon />
      </Button>
      <Image
        src={barbershop.imageUrl}
        fill
        alt={barbershop.name}
        style={{
          objectFit: "cover",
        }}
        className="opacity-75"
      />
    </div>
    <div>
      <h1 className="text-xl font-bold px-5 py-3">{barbershop.name}</h1>
      <div className="flex items-center gap-2">
        <MapPinIcon className="text-red-800" size={18} />
        <p className="text-sm">{barbershop.address}</p>
      </div>
    </div>
  </div>;
};

export default BarbershopDetailsPage;
