import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() =>
  import("../components/hello").then((mod) => mod.Hello)
);
// Also error with .js files
const DynamicComponent = dynamic(() =>
  import("../components/world").then((mod) => mod.World)
);

function Home() {
  return (
    <div>
      <DynamicComponent />
      <p>HOME PAGE is here!</p>
    </div>
  );
}

export default Home;
