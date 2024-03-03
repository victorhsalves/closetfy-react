export default function Footer() {
  return (
    <div className="w-full flex flex-col h-80 items-center justify-center gap-1 px-14 bg-gray-100">
      <span className="italic text-2xl">
        ClosetFy
      </span>
      <span className="text-gray-400 text-md">Your style shared in our world.</span>
      <div className="flex gap-2">
        <img
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/twitter.png"
          alt="Twitter Logo"
          width={28}
          height={28}
        />
        <img
          className="relative light:drop-shadow-[0_0_0.3rem_#ffffff70] light:invert"
          src="/facebook.png"
          alt="Twitter Logo"
          width={28}
          height={28}
        />
        <img
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert invert"
          src="/instagram.png"
          alt="Twitter Logo"
          width={28}
          height={28}
        />
        <img
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/github.png"
          alt="Twitter Logo"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
}
