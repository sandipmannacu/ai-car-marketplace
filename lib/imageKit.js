import ImageKit from "imagekit";

export function getServerImageKit() {
    return new ImageKit({
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,   // Replace with your actual public key
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // Replace with your actual private key
        urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPIONT // Replace with your actual URL endpoint
    });
} 

export function removeBackground(imageUrl) {
    if (!imageUrl) return null;
    
    if(imageUrl.includes("?")) {
        return `${imageUrl}&tr=bgremove:e-dropshadow`;
    }
    return `${imageUrl}?tr=bgremove:e-dropshadow`;
}