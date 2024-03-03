import { HeaderSearchInput } from ".";

interface HeaderProps {
  handleSearch: (search: string) => void;
  search: string;
}
export default function Header({ handleSearch, search }: HeaderProps) {
  return (
    <div className="w-full flex h-12 items-center justify-between gap-5 px-14">
      <span className="italic text-xl">
        ClosetFy
      </span>
      <HeaderSearchInput
        handleSearch={handleSearch}
        search={search}
      />
    </div>
  );
}
