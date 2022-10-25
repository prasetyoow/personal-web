import Image from "next/image"

export default function ProjectItems({image, name, desc}) {
  return (
    <article className="text-center">
              <Image
                src={image}
                width={550}
                height={357}
                alt="projects"
                className="w-full rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
              <p className="text-lg text-gray-400">
                {desc}
              </p>
            </article>
  )
}