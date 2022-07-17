import Head from "next/head";

interface IHeadSEOProps {
  title?: string;
  description?: string;
}

export const HeadSEO = ({ title, description }: IHeadSEOProps) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
