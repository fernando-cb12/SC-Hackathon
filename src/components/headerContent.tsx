import { UserIcon } from "@heroicons/react/16/solid";
//this component is a header that containts the title for each section
export default function HeaderContent({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 w-full">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center mt-2">
        <UserIcon />
      </div>
    </div>
  );
}
