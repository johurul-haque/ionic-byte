import Head from 'next/head';

type NextHeadProps = {
  title?: string;
  faviconUrl?: string;
} & ({ title: string } | { faviconUrl: string });

const description = `Unleash Your Digital Potential with IonicByte's Premier Web & App Design Services! Elevate Your Online Presence Today.`;

const imgUrl = `https://ionic-byte.vercel.app/ionic-byte.jpg`;

export function NextHead({ faviconUrl, title }: NextHeadProps) {
  return (
    <Head>
      {title && <title>{title.trim()}</title>}
      {faviconUrl && (
        <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
      )}
      <meta property="og:image" content={imgUrl} />
      <meta name="description" content={description} />
    </Head>
  );
}
