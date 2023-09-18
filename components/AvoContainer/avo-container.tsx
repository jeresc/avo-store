import { Avo } from '@/components'

interface IProps {
  avos: TProduct[]
}

export function AvoContainer({ avos }: IProps) {
  return (
    <section className="w-full">
      <div
        className="grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3"
      >
        {Boolean(avos.length) &&
          avos.map((avo) => <Avo key={avo.id} avo={avo} />)}
      </div>
    </section>
  )
}
