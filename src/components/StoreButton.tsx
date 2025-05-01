import Image from "next/image";

export const StoreButton = ({
    src,
    alt,
    title,
    store,
    className
  }: {
    src: string;
    alt: string;
    title: string;
    store: string;
    className:string
  }) => (
    <div className={className}>
      <Image src={src} alt={alt} width={30} height={30} className="object-contain mr-2" />
      <div className="leading-tight">
        <span className="text-[10px] block">{title}</span>
        <p className="font-bold text-sm">{store}</p>
      </div>
    </div>
  );