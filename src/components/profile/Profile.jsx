import Avatar from '../profile/Avatar';

import About from '../profile/About';

import Roles from '../profile/Roles';

import Connections from '../profile/Connections';

export default function Profile() {
    return(<div className="flex-col">
        <Avatar />
        <div className="pl-4 pr-4 bg-zinc-900 rounded-b-2xl">
            <About />
            <Roles />
            <Connections />
         </div>
        </div>)
}