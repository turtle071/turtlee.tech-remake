import Head from 'next/head';

import Profile from '../components/profile/Profile';

export default function Home() {
  return (
    <main className="flex mx-auto items-center justify-center pt-16 ">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://turtlee.tech/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/shortcurticon.png" />
        <meta property="og:image" content="/T.png" />
        <meta name="description" content="My personal website :D" />
        <title>Turtle</title>
      </Head>
      <div className="flex-col">
        <Profile />
        <div>
          <footer className="text-white text-center pt-[60px] text-xs">
            <p> Site feito por Turtle</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
