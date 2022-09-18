import Ancora from './icons/Ancora';

export default function Connections() {
  return (
    <div className="pt-[15px] border-t-[0.5px] border-zinc-800 pb-6">
      <p className="text-gray-200 text-[12px] pb-[10px]">
        <strong>CONNECTIONS</strong>
      </p>
      <nav className="">
        <div>
          <a className="flex rounded-[2px] bg-zinc-700 h-[30px] w-[250px] pt-[2px] pb-[1px] gap-1 hover:bg-zinc-600 hover:scale-105 duration-500" href="https://github.com/turtle071/">
            <img className=" invert h-[22px] pt-[6px] pl-[18px] cursor-pointer" src="/github.png" />
            <button className="text-zinc-100 pr-[135px] pl-1 text-[14px] ">
              <strong>Github</strong>
            </button>
            <Ancora />
          </a>
        </div>
        <div className="pt-2">
          <a className="flex rounded-[2px] bg-zinc-700 h-[30px] w-[250px] pt-[2px] pb-[1px] gap-1 hover:bg-zinc-600 hover:scale-105 duration-500" href="mailto:support@turtles.studio">
            <img className=" h-[22px] pt-[6px] pl-[18px] cursor-pointer" src="/mail.png" />
            <button className="text-zinc-100 pr-[129px] pl-1 text-[14px]">
              <strong>Contact </strong>
            </button>
            <Ancora />
          </a>
        </div>
      </nav>
    </div>
  );
}
