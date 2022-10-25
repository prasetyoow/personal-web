import Image from "next/image";

export default function SkillCard({ name, image, imageClassName }) {
  const addImageClassName = imageClassName ? ` ${imageClassName}` : "";
  return (
    <div className="bg-white shadow-skill rounded-lg p-8 flex items-center">
      <Image
        src={image}
        width={53}
        height={53}
        alt="skill-icons"
        className={`mr-6${addImageClassName}`}
      />
      <h4 className="text-lg font-semibold ml-4">{name}</h4>
    </div>
  );
}
