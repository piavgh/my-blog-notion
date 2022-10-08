import { Container } from 'layouts/Container';
import Image from 'next/image';

export default function Projects() {
  return (
    <Container title="Projects - Hoang Trinh">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          Projects
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          A selection of my favorite works.
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-3">
        <div className="col-span-1">
          <h2 className="mt-0">Kyberswap</h2>
          <p>
            I'm working in a team to build the Kyberswap decentralized exchange.
            My main duty is the DEX aggregator that aggregates and give the best
            rate to users.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://kyberswap.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit kyberswap.com
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className="absolute p-8"
                objectFit="fill"
                src="https://res.cloudinary.com/hoangtrinhj/image/upload/v1665215790/kyberswap.png"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/hoangtrinhj/image/upload/v1665215790/kyberswap.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'Kyberswap image'}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
