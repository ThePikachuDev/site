import { useEffect, useState, type SetStateAction } from 'react';

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState("");
    const [zoomLevel, setZoomLevel] = useState(1);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const images = [
        "gallery/japan-gate.webp",
        "gallery/city-roads-highway.webp",
        "gallery/cool-dragon-with-lights.webp",
        "gallery/fire-disco-speaker-ig.webp",
        "gallery/shibuya_street_night.webp",
        "gallery/mount-takao-view.webp",
        "gallery/temple-stairs.webp",
        "gallery/shibuya-cty-night.webp",
        "gallery/stone-lantern.webp",
        "gallery/mount-takao-view-2.webp",
        "gallery/wooden-temple-gate.webp",
        "gallery/a-red-colored-temple.webp"
    ];

    const openLightbox = (src: SetStateAction<string>) => {
        setSelectedImage(src);
        setZoomLevel(1);
        setDragPosition({ x: 0, y: 0 });
    };

    const closeLightbox = () => {
        setSelectedImage("");
        setZoomLevel(1);
        setDragPosition({ x: 0, y: 0 });
    };

    const zoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.25, 4));
    };

    const zoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
    };

    const resetZoom = () => {
        setZoomLevel(1);
        setDragPosition({ x: 0, y: 0 });
    };

    const getFileName = (path: String) => {
        return path.split('/').pop();
    };

    const handleMouseDown = (e: any) => {
        if (zoomLevel > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - dragPosition.x,
                y: e.clientY - dragPosition.y
            });
        }
    };

    const handleMouseMove = (e: any) => {
        if (isDragging && zoomLevel > 1) {
            setDragPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="w-full min-h-screen bg-black">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4">
                    <div className="border-2 border-white m-0.5 sm:m-1">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] lg:tracking-[0.5em] uppercase py-3 px-2 sm:py-4 sm:px-4 md:py-5 md:px-6 lg:py-6 lg:px-8 text-center">
                            [GALLERY]
                        </h1>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="columns-1 xs:columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 sm:px-4 pb-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="border-2 border-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 cursor-pointer overflow-hidden hover:opacity-90 transition-opacity duration-200 break-inside-avoid"
                            onClick={() => openLightbox(src)}
                        >
                            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-auto object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4"
                    onClick={closeLightbox}
                >
                    <div
                        className="bg-black border-2 border-white w-full max-w-7xl mx-auto flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxHeight: '95vh' }}
                    >
                        {/* Header */}
                        <div className="border-b-2 border-white p-2 sm:p-3 md:p-4 flex justify-between items-center gap-2">
                            <div className="text-white text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-mono truncate flex-1">
                                {getFileName(selectedImage)}
                            </div>
                            <button
                                onClick={closeLightbox}
                                className="text-white border-2 border-white px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-white hover:text-black uppercase tracking-wider whitespace-nowrap transition-colors duration-200"
                            >
                                CLOSE
                            </button>
                        </div>

                        {/* Image Container */}
                        <div
                            className="flex-1 p-2 sm:p-3 md:p-4 lg:p-6 flex items-center justify-center overflow-hidden"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            <div
                                className="relative w-full h-full flex items-center justify-center"
                                style={{
                                    cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                                }}
                            >
                                <img
                                    src={selectedImage}
                                    alt="preview"
                                    className="max-w-full max-h-full object-contain select-none"
                                    style={{
                                        transform: `scale(${zoomLevel}) translate(${dragPosition.x / zoomLevel}px, ${dragPosition.y / zoomLevel}px)`,
                                        transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                                    }}
                                    draggable={false}
                                />
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="border-t-2 border-white p-2 sm:p-3 md:p-4">
                            <div className="flex justify-center items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 flex-wrap">
                                <button
                                    onClick={zoomOut}
                                    disabled={zoomLevel <= 0.5}
                                    className="text-white border-2 border-white px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-white hover:text-black uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-white transition-colors duration-200"
                                >
                                    ZOOM OUT
                                </button>
                                <button
                                    onClick={resetZoom}
                                    className="text-white border-2 border-white px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-white hover:text-black uppercase tracking-wider transition-colors duration-200"
                                >
                                    RESET
                                </button>
                                <button
                                    onClick={zoomIn}
                                    disabled={zoomLevel >= 4}
                                    className="text-white border-2 border-white px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-white hover:text-black uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-white transition-colors duration-200"
                                >
                                    ZOOM IN
                                </button>
                            </div>
                            <div className="text-white text-center text-[0.6rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1.5 sm:mt-2 md:mt-3 font-mono opacity-50">
                                {Math.round(zoomLevel * 100)}%
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
//
// export const Gallery = () => {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [zoomLevel, setZoomLevel] = useState(1);
//
//
//     useEffect(() => {
//         const handleKeyDown = () => {
//             closeLightbox();
//         };
//
//         document.addEventListener('keydown', handleKeyDown);
//
//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//         };
//     }, []);
//
//     const images = [
//         "gallery/japan-gate.webp",
//         "gallery/city-roads-highway.webp",
//         "gallery/cool-dragon-with-lights.webp",
//         "gallery/fire-disco-speaker-ig.webp",
//         "gallery/shibuya_street_night.webp",
//         "gallery/mount-takao-view.webp",
//         "gallery/temple-stairs.webp",
//         "gallery/shibuya-cty-night.webp",
//         "gallery/stone-lantern.webp",
//         "gallery/mount-takao-view-2.webp",
//         "gallery/wooden-temple-gate.webp",
//         "gallery/a-red-colored-temple.webp"
//     ];
//
//     const openLightbox = (src: any) => {
//         setSelectedImage(src);
//         setZoomLevel(1);
//     };
//
//     const closeLightbox = () => {
//         setSelectedImage(null);
//         setZoomLevel(1);
//     };
//
//     const zoomIn = () => {
//         setZoomLevel(prev => Math.min(prev + 0.25, 4));
//     };
//
//     const zoomOut = () => {
//         setZoomLevel(prev => Math.max(prev - 0.25, 0.2));
//     };
//
//     const resetZoom = () => {
//         setZoomLevel(1);
//     };
//
//     const getFileName = (path: String) => {
//         return path.split('/').pop();
//     };
//
//     return (
//         <div className="w-screen h-fit bg-black">
//             <div className="lg:max-w-[80%] mx-auto">
//                 <div className="border-white mb-8 sm:mb-12">
//                     <div className="border-white m-1">
//                         <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl tracking-[0.3em] sm:tracking-[0.5em] uppercase p-4 sm:p-6 text-center">
//                             [GALLERY]
//                         </h1>
//                     </div>
//                 </div>
//                 <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
//                     {images.map((src, index) => (
//                         <motion.div
//                             key={index}
//                             className="border border-white my-4 cursor-pointer overflow-hidden"
//                             onClick={() => openLightbox(src)}
//                             whileHover={{ scale: 0.98 }}
//                             whileTap={{ scale: 0.95 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <img src={src} alt="image" className="w-full h-full object-cover" />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//
//             <AnimatePresence>
//                 {selectedImage && (
//                     <motion.div
//                         className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
//                         onKeyUpCapture={closeLightbox}
//                         onKeyPressCapture={closeLightbox}
//                         onClick={closeLightbox}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         <motion.div
//                             className="bg-black border border-white max-w-6xl w-full mx-auto flex flex-col"
//                             onClick={(e) => e.stopPropagation()}
//                             initial={{ scale: 0.8, opacity: 0, y: 50 }}
//                             animate={{ scale: 1, opacity: 1, y: 0 }}
//                             exit={{ scale: 0.8, opacity: 0, y: 50 }}
//                             transition={{
//                                 duration: 0.4,
//                                 ease: [0.16, 1, 0.3, 1]
//                             }}
//                             style={{ maxHeight: '90vh' }}
//                         >
//                             <div className="border-b border-white p-3 sm:p-4 flex justify-between items-center gap-2">
//                                 <div className="text-white text-xs sm:text-sm lg:text-2xl font-mono truncate flex-1">
//                                     {getFileName(selectedImage)}
//                                 </div>
//                                 <motion.button
//                                     onClick={closeLightbox}
//                                     className="text-white border border-white px-3 sm:px-4 py-1.5 sm:py-2 lg:text-4xl hover:bg-white hover:text-black uppercase tracking-wider text-xs whitespace-nowrap"
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     transition={{ duration: 0.2 }}
//                                 >
//                                     CLOSE
//                                 </motion.button>
//                             </div>
//
//                             <div className="flex-1 p-2 sm:p-4 md:p-6 flex items-center justify-center overflow-hidden">
//                                 <motion.div
//                                     className="relative w-full h-full flex items-center justify-center"
//                                     style={{ cursor: zoomLevel > 1 ? 'grab' : 'default' }}
//                                 >
//                                     <motion.img
//                                         src={selectedImage}
//                                         alt="preview"
//                                         className="max-w-full max-h-full object-contain select-none"
//                                         animate={{ scale: zoomLevel }}
//                                         transition={{
//                                             duration: 0.3,
//                                             ease: [0.16, 1, 0.3, 1]
//                                         }}
//                                         drag={zoomLevel > 1}
//                                         dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
//                                         dragElastic={0.1}
//                                     />
//                                 </motion.div>
//                             </div>
//
//                             <div className="border-t border-white p-3 sm:p-4">
//                                 <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
//                                     <motion.button
//                                         onClick={zoomOut}
//                                         disabled={zoomLevel <= 0.5}
//                                         className="text-white border border-white px-3 sm:px-6 py-1.5 sm:py-2 lg:text-4xl hover:bg-white hover:text-black uppercase tracking-wider text-xs disabled:opacity-30 disabled:cursor-not-allowed"
//                                         whileHover={{ scale: zoomLevel > 0.5 ? 1.05 : 1 }}
//                                         whileTap={{ scale: zoomLevel > 0.5 ? 0.95 : 1 }}
//                                         transition={{ duration: 0.2 }}
//                                     >
//                                         ZOOM OUT
//                                     </motion.button>
//                                     <motion.button
//                                         onClick={resetZoom}
//                                         className="text-white border border-white px-3 sm:px-6 py-1.5 sm:py-2 hover:bg-white lg:text-4xl hover:text-black uppercase tracking-wider text-xs"
//                                         whileHover={{ scale: 1.05 }}
//                                         whileTap={{ scale: 0.95 }}
//                                         transition={{ duration: 0.2 }}
//                                     >
//                                         RESET
//                                     </motion.button>
//                                     <motion.button
//                                         onClick={zoomIn}
//                                         disabled={zoomLevel >= 4}
//                                         className="text-white border border-white px-3 sm:px-6 py-1.5 sm:py-2 lg:text-4xl hover:bg-white  hover:text-black uppercase tracking-wider text-xs disabled:opacity-30 disabled:cursor-not-allowed"
//                                         whileHover={{ scale: zoomLevel < 4 ? 1.05 : 1 }}
//                                         whileTap={{ scale: zoomLevel < 4 ? 0.95 : 1 }}
//                                         transition={{ duration: 0.2 }}
//                                     >
//                                         ZOOM IN
//                                     </motion.button>
//                                 </div>
//                                 <div className="text-white text-center text-xs mt-2 sm:mt-3 font-mono opacity-50 lg:text-2xl">
//                                     {Math.round(zoomLevel * 100)}%
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// }
//
// export default Gallery;

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
