import Image from "next/image";
import Card from "@/components/card";
export default function InfoSection() {
  return (
    <section
      className="grid lg:grid-cols-6
      lg:gap-0
      md:grid-cols-4 grid-cols-1
      gap-6
    lg:p-0 lg:pb-10
    p-8 
    grid-cols-subgrid"
    >
      <Card main_container={"col-span-2"}></Card>
      <Card main_container={"col-span-2"}></Card>
      <Card
        main_container={"col-span-2 col-start-0 md:col-start-2 lg:col-start-5"}
      ></Card>
    </section>
  );
}
