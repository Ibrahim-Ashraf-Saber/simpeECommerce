import Nav from "../components/Nav";

function About() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center mt-[20px] gap-[20px]">
        <div className="text-4xl text-center font-bold">E-Commerce Project</div>
        <div className="text-2xl text-center font-semibold text-red-900">Ibrahim Ashraf</div>
      </div>
    </div>
  );
}

export default About;
