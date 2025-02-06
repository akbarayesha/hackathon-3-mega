import Image from "next/image";
import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

interface ProductCardProps {
    url: string;
    label: string;
    title: string;
    discount: number;
    actual: number;
    forceHover: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    url,
    label,
    title,
    discount,
    actual,
    forceHover
}) => {
    console.log("Product Image URL: ", url);  // Log the image URL to check if it's being passed correctly

    return (
        <div className={`${poppins.className} w-[285px] h-[446px] bg-productBackground relative overflow-hidden group cursor-pointer ${forceHover ? 'hovered' : ''}`}>
            {/* Product Image */}
            <div className="relative w-full h-[301px]">
                {url ? (
                    <Image
                        src={url}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                        className={`transition-opacity duration-300 ${forceHover ? 'opacity-50' : 'group-hover:opacity-50'}`}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200">No Image</div>
                )}
            </div>

            {/* Discount Badge */}
            {label && (
                <span className={`${label === "New" ? 'bg-labelAnotherColorForProduct' : 'bg-labelColorForProduct'} w-[48px] h-[48px] absolute top-5 right-5 rounded-full text-center py-3 text-white font-medium text-[16px]`}>
                    {label}
                </span>
            )}

            {/* Card Content */}
            <div className="p-4">
                <div>
                    <p className="font-semibold text-[24px] text-fontColor">{title}</p>
                    <div className="font-semibold text-[20px] text-fontColor">
                        ${discount.toFixed(2)}
                        <span className="pl-2 font-normal text-[16px] text-anotherFontColor line-through">
                            ${actual.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Overlay for Hover Effect */}
            <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${forceHover ? 'opacity-50' : 'group-hover:opacity-50'}`}></div>

            {/* Add to Cart Button */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 ${forceHover ? 'opacity-100' : 'group-hover:opacity-100'}`}>
                <button className="bg-white text-primaryColor py-3 px-16 font-semibold text-[16px] mb-4">
                    Add to Cart
                </button>

                {/* Action Icons */}
                <div className="flex gap-4">
                    <div className="flex items-center justify-center gap-1">
                        <Image src={'/assets/share.svg'} alt="share" width={12} height={13} />
                        <p className="font-semibold text-[16px]">Share</p>
                    </div>

                    <div className="flex items-center justify-center gap-1">
                        <Link href={"/comparision"}>
                            <Image src={'/assets/compare.svg'} alt="compare" width={13} height={14} />
                            <p className="font-semibold text-[16px]">Compare</p>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-1">
                        <Image src={'/assets/like.svg'} alt="like" width={13} height={14} />
                        <p className="font-semibold text-[16px]">Like</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
