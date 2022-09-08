/* eslint-disable @next/next/no-img-element */
export default function Avatar() {
   return (<section>
      <div className="bg-[url('/fundo.gif')] rounded-t-2xl pr-[2px] h-[120px]">
        <div className="text-center pl-5 pr-40 pt-20">
        <img className="rounded-full border-8 border-zinc-900 h-24" src="/icon.gif" alt="icon" />
        </div>
       </div>
            <div className="pl-4 pt-[58px] pr-4 bg-zinc-900 rounded-t-2xl">
            <h1 className="text-white text-lg"><strong>Emanuel Santos</strong></h1>
            <p className="text-zinc-400 pb-4 text-sm"><strong>Tutlee#3006</strong></p>
            </div>
      </section>)
}