// import DarkVeil from "../Components/DarkVeil";
import GradientText from '../Components/GradientText'

export default function Home() {
  return (
    <div className="mt-4 bg-white p-4">

      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="text-5xl p-4">
        Developers Group!
      </GradientText>

      <p className="text-lg md:text-xl mb-6 max-w-2xl leading-relaxed text-gray-300">
        I’m a <span className="text-blue-500 font-semibold">Front-End Developer</span> and
        <span className="text-blue-500 font-semibold"> Designer</span> passionate about creating
        visually stunning, user-focused digital experiences. I love turning ideas into clean,
        interactive interfaces that feel modern and intuitive.
      </p>

      <button className="button">
        View My Work
      </button>

    </div>
  );
}
