import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  location?: string;
  image?: string;
  imagePosition?: string;
  initials?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Adhitya Ram',
    role: 'Founder, DCANNAI',
    image: '/media/team/adhitya-ram.jpeg',
    imagePosition: 'center 34%'
  },
  {
    name: 'Hong Ngoc Diep',
    role: 'Accounts Manager',
    location: 'Vietnam',
    image: '/media/team/hong-ngoc-diep.jpg',
    imagePosition: 'center 18%'
  },
  {
    name: 'Madusudan Padmanaban',
    role: 'Accounts Manager',
    location: 'India',
    image: '/media/team/madusudan-padmanaban.jpeg',
    imagePosition: 'center 18%'
  },
  {
    name: 'Balraj Palem',
    role: 'Co founder and Network Engineer',
    image: '/media/team/balraj-palem.jpg',
    imagePosition: 'center 35%'
  },
  {
    name: 'Quang Duy',
    role: 'Software Engineer',
    image: '/media/team/quang-duy.jpeg',
    imagePosition: 'center 24%'
  },
  {
    name: 'Ky Lou',
    role: 'Software Engineer',
    image: '/media/team/ky-lou.jpeg',
    imagePosition: 'center 24%'
  },
  {
    name: 'Kim N',
    role: 'Software Engineer',
    image: '/media/team/kim-n.png',
    imagePosition: 'center 16%'
  },
  {
    name: 'Diep Gia Boa',
    role: 'Hardware Engineer',
    image: '/media/team/diep-gia-boa.jpeg',
    imagePosition: 'center 28%'
  }
];

export default function Team() {
  return (
    <section id="team" className="bg-[#efede4] px-5 py-20 text-[#111111] md:px-6 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 border-b border-black/[0.12] pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#6d6a62]">
              Team
            </p>
            <h2 className="max-w-4xl text-balance text-[clamp(2.75rem,5vw,5.8rem)] font-semibold leading-[1] tracking-normal">
              The people building DCANNAI.
            </h2>
          </div>
          <p className="max-w-2xl font-serif text-[clamp(1.35rem,1.7vw,2.15rem)] leading-[1.18] text-[#171717] lg:ml-auto">
            A compact team across product, software, hardware, network systems, and operations.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-lg border border-black/[0.10] bg-white/[0.72]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d5ca]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition ?? 'center' }}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#111111] text-6xl font-semibold text-white">
                    {member.initials}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-semibold leading-tight">{member.name}</h3>
                <p className="mt-2 text-base font-semibold text-[#5c5952]">{member.role}</p>
                {member.location ? (
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#7a766e]">{member.location}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
