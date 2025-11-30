import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);


    useEffect(() => {
        const handleKeyDown = (e) => {
            closeLightbox();
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const images = [
        "../../public/gallery/japan-gate.webp",
        "../../public/gallery/city-roads-highway.webp",
        "../../public/gallery/cool-dragon-with-lights.webp",
        "../../public/gallery/fire-disco-speaker-ig.webp",
        "../../public/gallery/shibuya_street_night.webp",
        "../../public/gallery/mount-takao-view.webp",
        "../../public/gallery/temple-stairs.webp",
        "../../public/gallery/shibuya-cty-night.webp",
        "../../public/gallery/stone-lantern.webp",
        "../../public/gallery/mount-takao-view-2.webp",
        "../../public/gallery/wooden-temple-gate.webp",
        "../../public/gallery/a-red-colored-temple.webp"
    ];

    const openLightbox = (src) => {
        setSelectedImage(src);
        setZoomLevel(1);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setZoomLevel(1);
    };

    const zoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.25, 4));
    };

    const zoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
    };

    const resetZoom = () => {
        setZoomLevel(1);
    };

    const getFileName = (path) => {
        return path.split('/').pop();
    };

    return (
        <div className="w-screen h-fit bg-black">
            <div className="lg:max-w-[80%] mx-auto">
                <div className="border-white mb-8 sm:mb-12">
                    <div className="border-white m-1">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl tracking-[0.3em] sm:tracking-[0.5em] uppercase p-4 sm:p-6 text-center">
                            [GALLERY]
                        </h1>
                    </div>
                </div>
                <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="border border-white my-4 cursor-pointer overflow-hidden"
                            onClick={() => openLightbox(src)}
                            whileHover={{ scale: 0.98 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src={src} alt="image" className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
                        onKeyUpCapture={closeLightbox}
                        onKeyPressCapture={closeLightbox}
                        onClick={closeLightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="bg-black border border-white max-w-6xl w-full mx-auto flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            style={{ maxHeight: '90vh' }}
                        >
                            <div className="border-b border-white p-3 sm:p-4 flex justify-between items-center gap-2">
                                <div className="text-white text-xs sm:text-sm lg:text-2xl font-mono truncate flex-1">
                                    {getFileName(selectedImage)}
                                </div>
                                <motion.button
                                    onClick={closeLightbox}
                                    className="text-white border border-white px-3 sm:px-4 py-1.5 sm:py-2 lg:text-4xl hover:bg-white hover:text-black uppercase tracking-wider text-xs whitespace-nowrap"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    CLOSE
                                </motion.button>
                            </div>

                            <div className="flex-1 p-2 sm:p-4 md:p-6 flex items-center justify-center overflow-hidden">
                                <motion.div
                                    className="relative w-full h-full flex items-center justify-center"
                                    style={{ cursor: zoomLevel > 1 ? 'grab' : 'default' }}
                                >
                                    <motion.img
                                        src={selectedImage}
                                        alt="preview"
                                        className="max-w-full max-h-full object-contain select-none"
                                        animate={{ scale: zoomLevel }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        drag={zoomLevel > 1}
                                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                                        dragElastic={0.1}
                                    />
                                </motion.div>
                            </div>

                            <div className="border-t border-white p-3 sm:p-4">
                                <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
                                    <motion.button
                                        onClick={zoomOut}
                                        disabled={zoomLevel <= 0.5}
                                        className="text-white border border-white px-3 sm:px-6 py-1.5 sm:py-2 lg:text-4xl hover:bg-white hover:text-black uppercase tracking-wider text-xs disabled:opacity-30 disabled:cursor-not-allowed"
                                        whileHover={{ scale: zoomLevel > 0.5 ? 1.05 : 1 }}
                                        whileTap={{ scale: zoomLevel > 0.5 ? 0.95 : 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        ZOOM OUT
                                    </motion.button>
                                    <motion.button
                                        onClick={resetZoom}
                                        className="text-white border border-white px-3 sm:px-6 py-1.5 sm:py-2 hover:bg-white lg:text-4xl hover:text-black uppercase tracking-wider text-xs"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        RESET
                                    </motion.button>
                                    <motion.button
                                        onClick={zoomIn}
                                        disabled={zoomLevel >= 4}
                                        className="text-white border border-white px-3 sm:px-6 py-1.5 sm:py-2 lg:text-4xl hover:bg-white  hover:text-black uppercase tracking-wider text-xs disabled:opacity-30 disabled:cursor-not-allowed"
                                        whileHover={{ scale: zoomLevel < 4 ? 1.05 : 1 }}
                                        whileTap={{ scale: zoomLevel < 4 ? 0.95 : 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        ZOOM IN
                                    </motion.button>
                                </div>
                                <div className="text-white text-center text-xs mt-2 sm:mt-3 font-mono opacity-50 lg:text-2xl">
                                    {Math.round(zoomLevel * 100)}%
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Gallery;

// export const Gallery = () => {
//     return (
//         <div className="w-screen h-fit bg-black ">
//
//             <div className="lg:max-w-[80%]  mx-auto">
//                 <div className="border-white mb-8 sm:mb-12">
//                     <div className="border-white m-1">
//                         <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl tracking-[0.3em] sm:tracking-[0.5em] uppercase p-4 sm:p-6 text-center">
//                             [GALLERY]
//                         </h1>
//                     </div>
//                 </div>
//
//                 <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
//                     <div className="border border-white my-4 ">
//                         <img src="../../public/gallery/japan-gate.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/city-roads-highway.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/cool-dragon-with-lights.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/fire-disco-speaker-ig.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/shibuya_street_night.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/mount-takao-view.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/temple-stairs.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/shibuya-cty-night.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/stone-lantern.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/mount-takao-view-2.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/wooden-temple-gate.webp" alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="border border-white my-4">
//                         <img src="../../public/gallery/a-red-colored-temple.webp" alt="image" className="w-full h-full object-cover" />
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//     )
// }
//
