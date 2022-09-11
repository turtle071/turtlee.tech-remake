import { useLanyardWs } from 'use-lanyard';
import About from './About';
import Avatar from './Avatar';
import Connections from './Connections';
import Roles from './Roles';

export default function Profile() {
  const data = useLanyardWs('335411366041092096');

  return (
    <div className="flex-col">
      {Avatar(data)}
      <div className="pl-4 pr-4 bg-zinc-900 rounded-b-2xl">
        <About />
        <Roles />
        <Connections />
      </div>
    </div>
  );
}
