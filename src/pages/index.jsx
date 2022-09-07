import Head from 'next/head';

export default function Home() {
  return (<main className="flex mx-auto items-center justify-center pt-16 ">
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
        <div className="bg-[url('/flowers.gif')] rounded-t-2xl pr-[2px] h-[120px]">
          <div className="text-center pl-5 pr-40 pt-20">
            <img className="rounded-full border-8 border-zinc-900 h-24" src="/icon.gif" alt="icon" />
          </div>
        </div>
          <div className="pl-4 pt-[58px] pr-4 bg-zinc-900 rounded-b-2xl">
            <h1 className="text-white text-lg"><strong>Emanuel Santos</strong></h1>
            <p className="text-zinc-400 pb-4 text-sm"><strong>Tutlee#3006</strong></p>
                <div className="pt-8 border-t border-zinc-800">
                  <p className="text-gray-200 text-xs pb-2"><strong>ABOUT ME</strong></p>
                  <p className="span text-white text-xs">Front End Developer<br /></p>
                  <span className=" bg-zinc-800 px-2 py-1 rounded-md text-zinc-300 font-mono text-[11px]">Only know that i know nothing.</span>
                </div>
                <div className="pt-8 pb-4">
                  <p className="text-white text-xs"><strong>ROLES</strong></p>
                  <div className="flex gap-1 pt-1">
                    <span className="text-zinc-300 text-xs bg-zinc-800 rounded-sm px-2 py-0.5">🟡 Javascript</span>
                    <span className="text-zinc-300 text-xs bg-zinc-800 rounded-sm px-2 py-0.5">🔴 Html5</span>
                    <span className="text-zinc-300 text-xs bg-zinc-800 rounded-sm px-2 py-0.5">🟣 Css3</span>
                  </div>
                  <span className=" text-zinc-300 text-xs bg-zinc-800 rounded-sm px-2 py-0.5">🔵 React</span>
                </div>
                  <div className="pt-6 border-t-[0.5px] border-zinc-800 pb-6">
                  <nav className="">
                    <div>
                    <a className="flex rounded-md bg-zinc-800 h-[30px] w-[250px] pt-[2px] pb-[1px] gap-1 hover:bg-zinc-600" href="https://github.com/turtle071/"> 
                    <img className=" invert h-[22px] pt-[6px] pl-2 cursor-pointer" src="/github.png"/>
                      <button className="text-zinc-200 pr-[135px] pl-1 text-[12px] ">
                      <strong>turtle071 </strong> </button>
                      <img className="invert h-[26px]" src="/ancora.png" />
                    </a>
                    </div>
                    <div className="pt-2">
                    <a className="flex rounded-md bg-zinc-800 h-[30px] w-[250px] pt-[2px] pb-[1px] gap-1 hover:bg-zinc-600" href="https://discord.com/users/335411366041092096"> 
                    <img className=" h-[22px] pt-[6px] pl-2 cursor-pointer" src="/discord.png"/>
                      <button className="text-zinc-200 pr-[110px] pl-1 text-[12px] ">
                      <strong>turtlee#3006 </strong> </button>
                      <img className="invert h-[26px]" src="/ancora.png" />
                    </a>
                    </div>
                    <div className="pt-2">
                    <a className="flex rounded-md bg-zinc-800 h-[30px] w-[250px] pt-[2px] pb-[1px] gap-1 hover:bg-zinc-600" href="mailto:support@turtles.studio"> 
                    <img className=" h-[22px] pt-[6px] pl-2 cursor-pointer" src="/mail.png"/>
                      <button className="text-zinc-200 pr-[150px] pl-1 text-[12px] ">
                      <strong>e-mail </strong> </button>
                      <img className="invert h-[26px]" src="/ancora.png" />
                    </a>
                    </div>
                  </nav>
                  </div>
          </div>
            <div>
            <footer className="text-white text-center pt-[60px] text-xs">
              <p> Site feito por Turtle</p>
            </footer> 
           </div>     
     </div>
    </main>)
}