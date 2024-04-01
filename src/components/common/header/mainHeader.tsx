type MainHeaderProps = { title: string };

const MainHeader = ({ title }: MainHeaderProps) => {
  return (
    <div className="my-6 text-2xl font-semibold text-gray-700 ">
      {title}
    </div>
  );
};
export default MainHeader;
