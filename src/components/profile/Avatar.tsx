import type { Data } from 'use-lanyard';
import { Status } from '../discord/Status';

export default function Avatar(data: Data | undefined) {
  return (
    <section>
      <div className="bg-[url('/fundo.gif')] rounded-t-[10px] pr-[10px] h-[120px]">
        <div className="text-center pl-5 pr-40 pt-20">
          <div role="img" aria-label="avatar" aria-hidden="false" className="w-[92px] h-[92px] border-[6px] relative rounded-full border-zinc-900">
            <svg width="92" height="80" viewBox="0 0 92 80" className="absolute">
              <defs>
                <mask id="avatar-mask">
                  <circle cx="40" cy="40" r="40" fill="white" />
                  <circle cx="68" cy="68" r="14" fill="black" />
                </mask>
              </defs>

              <foreignObject x="0" y="0" width="80" height="80" mask="url(#avatar-mask)">
                <div className="grid w-full h-full">
                  <picture>
                    <source
                      srcSet="https://cdn.discordapp.com/avatars/335411366041092096/24fb64abd900b5d3e5cdf96c09fae838.webp?size=128,
                      https://cdn.discordapp.com/avatars/335411366041092096/24fb64abd900b5d3e5cdf96c09fae838.webp?size=256 x2,
                      https://cdn.discordapp.com/avatars/335411366041092096/24fb64abd900b5d3e5cdf96c09fae838.webp?size=512 x4"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://cdn.discordapp.com/avatars/335411366041092096/24fb64abd900b5d3e5cdf96c09fae838.png?size=128,
                      https://cdn.discordapp.com/avatars/335411366041092096/24fb64abd900b5d3e5cdf96c09fae838.png?size=256 x2,
                      https://cdn.discordapp.com/avatars/335411366041092096/24fb64abd900b5d3e5cdf96c09fae838.png?size=512 x4"
                      type="image/png"
                    />
                    <img
                      src={`https://cdn.discordapp.com/avatars/335411366041092096/24fb64abd900b5d3e5cdf96c09fae838.webp?size=80`}
                      alt="avatar"
                      width="85"
                      height="85"
                      aria-hidden="true"
                      draggable="false"
                      className="block"
                    />
                  </picture>
                </div>
              </foreignObject>
              <circle cx="68" cy="68" r="8" className={Status(data)} />
            </svg>
          </div>
        </div>
      </div>
      <div className="pl-4 pt-[58px] pr-4 bg-zinc-900 pb-4">
        <h1 className="text-white text-[20px] font-bold">
          <span>Turtlee</span>
          <span className="text-zinc-400">#3006</span>
        </h1>
      </div>
    </section>
  );
}
