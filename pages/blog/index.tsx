import { convertToArticleList, getAllArticles } from '@/lib/notion';
import { useEffect, useState } from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

import { ArticleList } from '@/components/ArticleList';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Subscribe } from '@/components/Subscribe';
import { SubscribeSize } from '@/lib/types';
import { Tag } from '@/components/Tag';
import { handleArticleClicked } from '@/lib/handleArticleClick';
import siteMetadata from '@/data/siteMetadata';
import slugify from 'slugify';

export default function Blog({ featuredArticle, articles, tags }) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const filteredArticles = articles
    .sort((a, b) => Number(new Date(b.publishedDate)))
    .filter((post) => {
      return (
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.tags.some((el) => el.name === searchValue.toLocaleLowerCase())
      );
    });

  useEffect(() => {
    setSearchValue(selectedTag);
  }, [selectedTag]);

  return (
    <Container title="Blog - Hoang Trinh">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          My Blog
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Insightful and helpful content curated for you.
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
        <button
          onClick={() =>
            handleArticleClicked(slugify(featuredArticle.title).toLowerCase())
          }
          className="col-span-8 space-y-2 text-left hover:cursor-pointer group"
        >
          <div>
            <Image
              className="rounded-xl group-hover:opacity-75"
              objectFit="fill"
              src={featuredArticle.coverImage}
              placeholder="blur"
              blurDataURL={featuredArticle.coverImage}
              width={1200}
              height={684}
              layout="intrinsic"
              alt={'article cover'}
            />
            <div className="">
              <div className="flex items-center mt-4 md:justify-start">
                <p className="m-0 text-lg font-semibold">Featured article</p>
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.25 10C17.25 12.8995 14.8995 15.25 12 15.25C9.10051 15.25 6.75 12.8995 6.75 10C6.75 7.10051 9.10051 4.75 12 4.75C14.8995 4.75 17.25 7.10051 17.25 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.75 14.75L7.75 19.25L12 17.75L16.25 19.25L15.25 14.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="flex w-3 h-3">
                  <span className="relative inline-flex w-3 h-3 bg-teal-500 rounded-full"></span>
                  <span className="absolute inline-flex w-3 h-3 bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                </span>
              </div>
              <h2 className="my-4 text-4xl">{featuredArticle.title}</h2>
              <p>{featuredArticle.summary}</p>
            </div>
            {/* <!-- Ezoic - featured blog  - mid_content --> */}
            <div id="ezoic-pub-ad-placeholder-115"> </div>
            {/* <!-- End Ezoic - featured blog  - mid_content --> */}
          </div>
        </button>
        <div className="w-full col-span-4 space-y-12">
          <div className="hidden md:block">
            <Subscribe size={SubscribeSize.SMALL} />
          </div>
          <div className="hidden md:block">
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Connect with Me
            </h3>
            <div className="flex items-center order-2 space-x-6">
              <a
                href={siteMetadata.github}
                target="_blank"
                className="text-gray-600 dark:text-gray-400 important"
                rel="noreferrer"
              >
                <span className="sr-only">{siteMetadata.github}</span>
                <FaGithub />
              </a>
              <a
                href={siteMetadata.twitter}
                target="_blank"
                className="text-gray-600 dark:text-gray-400 important"
                rel="noreferrer"
              >
                <span className="sr-only">{siteMetadata.twitter}</span>
                <FaTwitter />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                className="text-gray-600 dark:text-gray-400 important"
                rel="noreferrer"
              >
                <span className="sr-only">{siteMetadata.linkedin}</span>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-12 overflow-x-auto">
        <div className="flex space-x-2 not-prose">
          <svg
            className="flex-none w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path
              d="m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z"
              className="stroke-slate-400 dark:stroke-slate-300"
            ></path>
            <path
              d="M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5"
              className="stroke-teal-400"
            ></path>
          </svg>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Scroll to view various categories
          </p>
        </div>
        <ul className="flex w-full gap-6 py-8 overflow-x-auto snap-x">
          {/* Initial tag for all topics */}
          <div className="scroll-ml-6 snap-normal snap-start shrink-0">
            <Tag activeTag={selectedTag} tag="" cb={() => setSelectedTag('')} />
          </div>
          {tags &&
            tags.map((tag) => (
              <div
                key={tag}
                className="scroll-ml-6 snap-normal snap-start shrink-0"
              >
                <Tag
                  activeTag={selectedTag}
                  tag={tag}
                  cb={() => setSelectedTag(tag)}
                />
              </div>
            ))}
        </ul>

        {/* gradient fades */}
        <div className="absolute w-8 h-16 top-[40px] left-0 bg-gradient-to-r from-white dark:from-dark"></div>
        <div className="absolute w-8 h-16 top-[40px] right-0 bg-gradient-to-l from-white dark:from-dark"></div>
      </div>
      <div className="min-h-screen space-y-12">
        {!filteredArticles.length && (
          <div className="w-full mx-auto rounded-lg bg-[#F8FAFC] dark:bg-midnight p-4">
            <p className="flex items-center justify-center text-2xl">
              No articles found{' '}
              <span>
                <svg className="ml-3 w-7 h-7" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75C4.75 6.54086 6.54086 4.75 8.75 4.75Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.75 15.25C7.75 15.25 9 12.75 12 12.75C15 12.75 16.25 15.25 16.25 15.25"
                  ></path>
                  <circle cx="14" cy="10" r="1" fill="currentColor"></circle>
                  <circle cx="10" cy="10" r="1" fill="currentColor"></circle>
                </svg>
              </span>
            </p>
          </div>
        )}
        <ArticleList articles={filteredArticles} />
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID);
  const { articles, tags } = convertToArticleList(data);

  let blogArticles = articles;

  if (!preview || preview === undefined) {
    blogArticles = blogArticles.filter((article) => article.isPublic === true);
  }

  const featuredArticle = blogArticles[0];

  return {
    props: {
      featuredArticle,
      articles: blogArticles.slice(1),
      tags
    },
    revalidate: 30
  };
};
