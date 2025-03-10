// this is the main org component, all other org components will be imported here
import OrgGrid from "./OrgGrid";
import OrgHeader from "./OrgHeader";
import OrgBg from "./OrgBg";

export default function Org() {
  return (
    <div className="py-10 md:py-0 -mb-12 md:-mb-8" id="organizers">
      <OrgHeader></OrgHeader>
      <div className="relative mt-36 md:mt-16">
        <div className="md:block hidden xl:mb-[55rem] lg:mb-[160rem] md:mb-[220rem]">
          <OrgBg />
        </div>
        <div className="md:absolute top-0 w-full">
          <OrgGrid></OrgGrid>
        </div>
      </div>
    </div>
  );
}
