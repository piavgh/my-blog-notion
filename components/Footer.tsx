import Link from 'next/link';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

import { Subscribe } from './Subscribe';
import { SubscribeSize } from '@/lib/types';
import siteMetadata from '@/data/siteMetadata';

const navigation = {
  general: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' }
  ],
  specifics: [
    // { name: 'Activity', href: '/activity' },
    { name: 'Stats', href: '/stats' },
    { name: 'Toolbox', href: '/toolbox' }
  ],
  extra: [
    { name: 'Changelog', href: '/changelog' },
    { name: 'Meet up', href: '/meetup' }
    // { name: 'Books', href: '/books' }
  ],
  social: [
    {
      name: 'GitHub',
      href: siteMetadata.github,
      icon: () => <FaGithub />
    },
    {
      name: 'Twitter',
      href: siteMetadata.twitter,
      icon: () => <FaTwitter />
    },
    {
      name: 'LinkedIn',
      href: siteMetadata.linkedin,
      icon: () => <FaLinkedin />
    }
  ]
};

export function Footer() {
  return (
    <>
      <footer>
        <hr />
        <div className="xl:grid xl:grid-cols-4 xl:gap-2">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  General
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {navigation.general.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Specifics
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {navigation.specifics.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <a
                    target="_blank"
                    href={siteMetadata.snippets}
                    className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
                    rel="noreferrer"
                  >
                    Snippets
                  </a>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Extra
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {navigation.extra.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <a
                    target="_blank"
                    href={siteMetadata.newsletter}
                    className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
                    rel="noreferrer"
                  >
                    Newsletter
                  </a>
                  <a
                    target="_blank"
                    href={siteMetadata.resume}
                    className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-8 xl:mt-0">
            <Subscribe size={SubscribeSize.SMALL} />
          </div>
        </div>
        <div className="flex items-center justify-between mt-12">
          <div className="flex items-center order-2 space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 important"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="order-1 text-base">
            &copy; {new Date().getFullYear()} {siteMetadata.author}
          </p>
        </div>
      </footer>
    </>
  );
}
