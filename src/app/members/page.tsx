"use client";

import Image from "next/image";

type Member = {
  name: string;
  role: string;
  imageSrc?: string;
};

const members: Member[] = [
  {
    name: "P.C JOSEPH ERNAKULAM",
    role: "Managing Director",
  },
  {
    name: "MURALEEDHARAN K.P",
    role: "Administrator",
    imageSrc: "/MURALEEDHARAN K.P.jpg",
  },
  {
    name: "PUSHPAJA A.R",
    role: "Associate Administrator",
    imageSrc: "/PUSHPAJA A.R.jpg",
  },
  {
    name: "VINOD M.V",
    role: "Financial Administrator",
    imageSrc: "/VINOD MV.jpg",
  },
  {
    name: "BINDU PRABHAKARAN",
    role: "Associate Director",
  },
];

function MemberCard({ name, role, imageSrc }: Member) {
  return (
    <div className="w-full rounded-xl bg-card shadow-sm border border-border overflow-hidden">
      <div className="flex flex-col sm:flex-row items-stretch">
        <div className="relative w-full sm:w-48 h-56 sm:h-48 shrink-0">
          <Image
            src={imageSrc ?? "/file.svg"}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 12rem"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-5 flex-1 flex items-center">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            <p className="text-primary mt-1 font-medium">({role})</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MembersPage() {
  return (
    <section className="pb-16">
      {/* Banner */}
      <div className="relative w-full h-[150px] sm:h-[400px] md:h-[400px] bg-black">
      <Image
          src="/BTEAM%20WINNERS.jpg"
          alt="Team WINNERS"
          fill
          sizes="110vw"
          className="object-cover object-top md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow">
            Members
          </h1>
        </div>
      </div>

      {/* Members list */}
      <div className="container mx-auto px-4 mt-8 grid gap-6 max-w-5xl">
        {members.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </section>
  );
}


