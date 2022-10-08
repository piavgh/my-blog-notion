import { convertToArticleList, getPublishedArticles } from '@/lib/notion';

import { ArticleList } from '@/components/ArticleList';
import { Button } from '@/components/Button';
import { ButtonType } from '@/lib/types';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

const workExperience = [
  {
    company: 'Kyber Network',
    title: 'Software Engineer',
    duration: '02/2021 - Present'
  },
  {
    company: 'Linagora',
    title: 'Full-Stack Engineer',
    duration: '04/2020 - 01/2021'
  },
  {
    company: 'JetDyno',
    title: 'Co-Founder',
    duration: '07/2019 - 02/2020'
  },
  {
    company: 'Tomochain',
    title: 'Team Leader',
    duration: '11/2018 - 07/2019'
  },
  {
    company: 'Scopic Software',
    title: 'Full-Stack Engineer',
    duration: '04/2017 - 10/2018'
  },
  {
    company: 'Magestore',
    title: 'Magento Developer',
    duration: '06/2015 - 03/2017'
  }
];

export default function About({ recentArticles }) {
  const { push } = useRouter();

  return (
    <Container title="About Me - Hoang Trinh">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400 mb-8">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's my story.
        </span>
      </h1>
      <p>
        I’m Hoang, a lifelong learner,{' '}
        <Link href="/blog">
          <a>blogger</a>
        </Link>{' '}
        and software engineer who specializes in backend development.
      </p>
      <p>
        At present, I am working full time at{' '}
        <a href="https://kyber.network">Kyber Network</a>, a company dedicated
        to provide decentralized finance for everyone. Specifically, I am
        building a DEX aggregator called{' '}
        <a href="https://kyberswap.com">kyberswap.com</a>.
      </p>

      <p>
        I work mainly as a backend developer (Golang, Rust, Node.js) but I can
        also work with React.js (this website is built with Next.js). My main
        focus now is to become a savvy blockchain engineer.
      </p>
      <p>
        You can check{' '}
        <a href="https://resume.hoangtrinhj.com">my resume here</a> for more
        information . In my free time, I try to learn as much as I can about
        blockchain, EVM, MEV, flash loan and other blockchain infrastructure.
        There are so many things to learn in this field.
      </p>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-5">
        <div className="col-span-1">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="fill"
            src="https://res.cloudinary.com/hoangtrinhj/image/upload/v1665205306/Hoang.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/hoangtrinhj/image/upload/v1665205306/Hoang.jpg"
            width={260}
            height={260}
            layout="responsive"
            alt={'article cover'}
          />
        </div>
        <div className="col-span-3">
          <p className="">
            I started this website as a place to document everything I learned.
            I love self-learning and write about everything I know.
          </p>

          <p>
            You can find me on <a href={siteMetadata.twitter}>Twitter</a> where
            I share tech-related tidbits and build in public, or you can follow
            me on <a href={siteMetadata.github}>GitHub</a>. I often write about
            my findings on my{' '}
            <Link href="/blog">
              <a>blog</a>
            </Link>
            .
          </p>
        </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
        <p>Here's a brief rundown of my most recent experiences.</p>
        <div className="space-y-2">
          {workExperience.map((workItem) => (
            <div
              key={workItem.company}
              className="flex items-center space-x-3 group"
            >
              <span className="flex-none text-gray-900 gover-hover:underline dark:text-white">
                {workItem.company}
              </span>
              <span className="w-full md:border-t md:border-gray-300 md:border-dashed shrink dark:border-gray-700"></span>
              <span className="flex-none hidden sm:block">
                {workItem.title}
              </span>
              <span className="flex-none">{workItem.duration}</span>
            </div>
          ))}
        </div>
        <div className="inline-flex w-full md:w-auto ">
          <a
            className="items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white no-underline rounded-full md:text-xl md:px-12 bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href={siteMetadata.resume}
            target="_blank"
            rel="noreferrer"
          >
            View my resume
          </a>
        </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mb-12">
        <h2>I love to share my knowledge through writing.</h2>
        <p>Check out a few of my most recent articles.</p>
        <ArticleList articles={recentArticles} />
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">
        <div className="col-span-3">
          <h2>Interested in my gear?</h2>
          <p>
            I keep a list of software, applications, extensions, hardware and a
            list of supplies I've used to set up my office for those who are
            interested.
          </p>
          <Button
            buttonType={ButtonType.PRIMARY}
            onButtonClick={() => push('/toolbox')}
          >
            Check out my toolbox
          </Button>
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="cover"
            src="https://res.cloudinary.com/hoangtrinhj/image/upload/v1637186547/toolbox_hardware.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/hoangtrinhj/image/upload/v1637186547/toolbox_hardware.jpg"
            width={260}
            height={260}
            layout="responsive"
            alt={'article cover'}
          />
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  const { articles } = convertToArticleList(data);

  return {
    props: {
      recentArticles: articles.slice(0, 3)
    },
    revalidate: 120
  };
};
