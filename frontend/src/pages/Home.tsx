import Nav from "../components/Nav";
import { LoginButtons } from "../components/LoginButtons";
export default function Home() {

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-evenly items-center w-screen h-screen">
        <h1 className="text-3xl">To do List</h1>
        <LoginButtons />
      </div>
    </>)
}
