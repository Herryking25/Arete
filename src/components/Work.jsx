import React, { useRef, useState } from 'react';

const Work = () => {
  const cardsContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    const container = cardsContainerRef.current;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = cardsContainerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    container.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Our Work</h2>
      <div
        ref={cardsContainerRef}
        className="flex overflow-x-auto space-x-4 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }} // Change cursor during drag
      >
        <div className="card bg-white shadow-lg rounded-lg w-64 flex-shrink-0">
          <img className="rounded-t-lg h-[256px] w-[200px]" src="https://i.pinimg.com/564x/32/b2/d9/32b2d9c4e2b27f3a50bba7b379ef59d9.jpg" alt="Event Photograph" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Event Photograph</h3>
          </div>
        </div>
        <div className="card bg-white shadow-lg rounded-lg w-64 flex-shrink-0">
          <img className="rounded-t-lg h-[256px] w-[200px]" src="https://i.pinimg.com/564x/6a/b7/d7/6ab7d7204aea5dde5e6c91e943f508a5.jpg" alt="UX Layout for Our Works" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">UX Layout for Our Works</h3>
          </div>
        </div>
        <div className="card bg-white shadow-lg rounded-lg w-64 flex-shrink-0">
          <img className="rounded-t-lg h-[256px] w-[200px]" src="https://i.pinimg.com/564x/60/f7/32/60f732eff919f5a377411af80abd5a63.jpg" alt="App Designs" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">App Designs</h3>
          </div>
        </div>
        <div className="card bg-white shadow-lg rounded-lg w-64 flex-shrink-0">
          <img className="rounded-t-lg h-[256px] w-[200px]" src="https://i.pinimg.com/564x/60/f7/32/60f732eff919f5a377411af80abd5a63.jpg" alt="App Designs" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">App Designs</h3>
          </div>
        </div>
        <div className="card bg-white shadow-lg rounded-lg w-64 flex-shrink-0">
          <img className="rounded-t-lg h-[256px] w-[200px]" src="https://i.pinimg.com/564x/60/f7/32/60f732eff919f5a377411af80abd5a63.jpg" alt="App Designs" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">App Designs</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
