import Nav from "../components/Nav";

function About() {
  return (
    <div className="min-h-screen dark:bg-gray-800">
      <Nav />
      <div className="flex flex-col justify-center items-center mt-[20px] gap-[20px]">
        <div className="text-4xl font-bold text-center">E-Commerce Project</div>
        <div className="text-2xl font-semibold text-center text-red-900">Ibrahim Ashraf</div>
      </div>
    </div>
  );
}

export default About;
