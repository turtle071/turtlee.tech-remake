import type { Data } from 'use-lanyard';

export function Status(data: Data | undefined) {
  if (!data) return 'fill-slate-500';

  switch (data.discord_status) {
    case 'online':
      return 'fill-green-600';
    case 'idle':
      return 'fill-amber-400';
    case 'dnd':
      return 'fill-red-500';
    case 'offline':
      return 'fill-slate-500';
  }

  return 'fill-slate-500';
}
