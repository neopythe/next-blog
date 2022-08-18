import { format } from 'date-fns'

export default function Date({ date }: { date: Date }) {
  return (
    <time dateTime={String(date)} className="text-gray-400">
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}
