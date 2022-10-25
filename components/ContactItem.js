import Image from "next/image";

export default function ContactItem({ href, label, value, icon, className }) {
  const addClassName = className ? ` ${className}` : "";
  return (
    <div className={`flex items-start${addClassName}`}>
      <Image src={icon} alt="icon-contact" width={24} height={24} />
      <div className="ml-4">
        <div className="text-sm font-semibold mb-1">{label}</div>
        <div>
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold">{value}</a>
        </div>
      </div>
    </div>
  );
}
