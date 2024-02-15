import Head from 'next/head';

type NextHeadProps = {
  title?: string;
  faviconUrl?: string;
} & ({ title: string } | { faviconUrl: string });

export function NextHead({ faviconUrl, title }: NextHeadProps) {
  return (
    <Head>
      {title && <title>{title.trim()}</title>}
      {faviconUrl && (
        <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
      )}
    </Head>
  );
}
