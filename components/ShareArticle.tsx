import { LinkedinShareButton, TwitterShareButton } from 'react-share';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaCopy } from '@react-icons/all-files/fa/FaCopy';

import { getArticlePublicUrl } from '@/lib/getArticlePublicUrl';
import { useCopyToClipboard } from '@/lib/hooks/useCopyToClipboard';

type Props = {
  slug: string;
  title: string;
};

export function ShareArticle({ slug, title }: Props) {
  const [isCopied, handleCopy] = useCopyToClipboard(1500);
  const pubilcUrl = getArticlePublicUrl(slug);
  return (
    <div className="flex items-center space-x-4 m-0 justify-center">
      <TwitterShareButton url={pubilcUrl} title={title} via={'hoangtrinhj'}>
        <FaTwitter size={28} />
      </TwitterShareButton>
      <LinkedinShareButton title={title} url={pubilcUrl}>
        <FaLinkedin size={28} />
      </LinkedinShareButton>
      <button
        className={`group ${isCopied ? 'text-teal-500' : ''}`}
        onClick={() => handleCopy()}
      >
        <span className="sr-only">Copy code</span>
        <FaCopy size={28} />
      </button>
    </div>
  );
}
