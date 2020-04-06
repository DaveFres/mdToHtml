import Link from "next/link";
import Head from 'next/head';
import fs from "fs";
import icon from '../public/favicon.svg';

const Home = ({ slugs }) => (
  <div>
    <Head>
      <link rel="icon" href="/favicon_l.svg" />
    </Head>
    <header className="navbar">
      <div className="navbar__logo-link">
        <a href='/'>
          {icon}
        </a>
      </div>
    </header>
    slugs:
    {slugs.map(slug => {
      return (
        <div key={slug}>
          <Link href={"/docs/" + slug}>
            <a>{"/docs/" + slug}</a>
          </Link>
        </div>
      );
    })}
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("md_files");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Home;