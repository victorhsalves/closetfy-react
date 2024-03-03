import { BiSearch } from "react-icons/bi";

interface HeaderProps {
  handleSearch: (search: string) => void;
  search: string;
}
export default function HeaderSearchInput({ handleSearch, search }: HeaderProps) {
  return (
    <div className="flex flex-row w-full relative">
      <BiSearch
        className="absolute left-1 top-[15%]"
        size={24}
        color="darkgray"
      />
      <input
        type="text"
        className="w-full h-8 rounded-full bg-gray-100 px-8"
        placeholder="Search for clothes..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      >
      </input>
    </div>
  );
}
