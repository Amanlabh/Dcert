export const Background = () => {
  return (
    <div className="hidden sm:block  top-[400px] tall:top-2/4 right-6 mt-20 ml-20 -z-10 translate-x-2/4 lg:translate-x-1/3 -translate-y-2/4 min-h-[700px] h-[100dvh] aspect-square" style={{ margin: '-900px 0px 0px 700px' }}>
      <img
        src="./bg.png"
        role="presentation"
        loading="lazy"
        alt="An astronaut floating in space around planet Juno orbited by satellites, stars in the background."
      />
    </div>
  );
};
