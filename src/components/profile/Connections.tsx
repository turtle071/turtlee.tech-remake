import Ancora from './icons/Ancora';

export default function Connections() {
  return (
    <div className="pt-[10px] border-t-[0.5px] border-zinc-800 pb-6">
      <p className="text-gray-200 text-[12px] pb-[10px]">
        <strong>CONNECTIONS</strong>
      </p>
      <nav className="">
        <div>
          <a className="flex rounded-[2px] bg-zinc-700 h-[30px] w-[250px] pt-[2px] pb-[1px] gap-1 hover:bg-zinc-600" href="https://github.com/turtle071/">
            <img className=" invert h-[22px] pt-[6px] pl-[18px] cursor-pointer" src="/github.png" />
            <button className="text-zinc-100 pr-[115px] pl-1 text-[13px] ">
              <strong>turtle071</strong>
            </button>
            <Ancora />
          </a>
        </div>
        <div className="pt-2">
          <a className="flex rounded-[2px] bg-zinc-700 h-[30px] w-[250px] pt-[2px] pb-[1px] gap-1 hover:bg-zinc-600" href="https://discord.com/users/335411366041092096">
            <img className=" h-[22px] pt-[6px] pl-[18px] cursor-pointer" src="/discord.png" />
            <button className="text-zinc-100 pr-[88.4px] pl-1 text-[13px] ">
              <strong>turtlee#3006 </strong>
            </button>
            <Ancora />
          </a>
        </div>
        <div className="pt-2">
          <a className="flex rounded-[2px] bg-zinc-700 h-[30px] w-[250px] pt-[2px] pb-[1px] gap-1 hover:bg-zinc-600" href="mailto:support@turtles.studio">
            <img className=" h-[22px] pt-[6px] pl-[18px] cursor-pointer" src="/mail.png" />
            <button className="text-zinc-100 pr-[131px] pl-1 text-[13px]">
              <strong>e-mail </strong>
            </button>
            <Ancora />
          </a>
        </div>
      </nav>
    </div>
  );
}
