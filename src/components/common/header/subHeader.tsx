type MainHeaderProps = { title: string };

const SubHeader = ({ title }: MainHeaderProps) => {
  return (
    <div className="my-2 text-xl font-semibold text-gray-700 ">
      {title}
    </div>
  );
};
export default SubHeader;
