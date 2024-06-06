import Image from 'next/image';
import tv from '../public/icons/tv.svg';
import trophy from '../public/icons/trophy.svg';
import rectangle from '../public/icons/rectangle.png';
import tunnel from '../public/icons/tunnel.svg';
import green from '../public/icons/icon2.png';
import daire from '../public/icons/daire.png'
export default function Section () {
    const features = [
        {
          name: 'Nibh viverra',
          description:
            'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
          image: trophy,
          icon: rectangle,
        },
        {
          name: 'Cursus amet',
          description:
            'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
          image: tunnel,
          icon: green,
        },
        {
          name: 'Ipsum fermentum',
          description:
            'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
          image: tv,
          icon: daire,
        },
      ]
  return (
    <div className="mx-auto px-6 py-24 pb-10 max-w-3xl lg:max-w-7xl">
    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.name} className="flex flex-col mx-6">
          <div className="mt-4 flex flex-auto flex-col gap-y-4 text-[#0F172A]">
              <div className='relative flex h-12'>
                  <span className='absolute w-10 h-10 m-auto top-0 left-5'>
                      <Image 
                          src={feature.icon}
                          width={48}
                          height={48}
                          alt={feature.name}
                      />
                  </span>
                  <Image
                  src={feature.image}
                  className='absolute'
                  width={48}
                  height={48}
                  alt={feature.name}
              />
              </div>
              <p className="flex-auto leading-6 text-xl">{feature.name}</p>
              <p className="flex-auto text-md leading-7">{feature.description}</p>
          </div>
        </div>
      ))}
    </dl>
    </div>
  )
}
