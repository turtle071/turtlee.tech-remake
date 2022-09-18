export default function Roles() {
  return (
    <div className="pt-4 pb-4">
      <p className="text-gray-200 text-xs">
        <strong>ROLES</strong>
      </p>
      <div className="flex gap-1 pt-1">
        <span className="text-zinc-300 text-xs bg-zinc-800 rounded-[4px] px-2 py-0.5">🟡 JavaScript</span>
        <span className="text-zinc-300 text-xs bg-zinc-800 rounded-[4px] px-2 py-0.5">🔴 HTML</span>
        <span className="text-zinc-300 text-xs bg-zinc-800 rounded-[4px] px-2 py-0.5">🟣 CSS</span>
      </div>
      <span className=" text-zinc-300 text-xs bg-zinc-800 rounded-[4px] px-2 py-0.5">🔵 React</span>
    </div>
  );
}
