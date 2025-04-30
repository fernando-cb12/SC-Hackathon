import { UserIcon } from "@heroicons/react/16/solid";
//this component is a header that containts the title for each section
export default function HeaderContent({ title }: { title: string }) {
  return (
    <div className="flex flex-col w-full bg-[#F2F0EB] p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <UserIcon className="h-8 w-8 text-gray-800" />
      </div>
    </div>
  );
}
