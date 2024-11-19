import HeroList from "../components/herolist";
import Select from "@/app/components/select/select"
export default function Home() {
  return (
    <div className="flex">
      <Select></Select>
      <HeroList></HeroList>
    </div>
  );
}
