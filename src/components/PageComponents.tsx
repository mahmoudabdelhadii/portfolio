interface WrapperProps {
  name: string;
  children: JSX.Element | JSX.Element[];
  showTitle?: boolean;
  ParentClass?: string;
  HeaderClass?: string;
  ChildrenClass?: string;
  SubParentClass?: string;
}
export const Wrapper: React.FunctionComponent<WrapperProps> = ({
  children,
  name,
  showTitle,
  ParentClass,
  HeaderClass,
  ChildrenClass,
  SubParentClass,
}) => {
  return (
    <div className={`${"w-full " + (ParentClass ? ParentClass : "")}`}>
      {showTitle && (
        <div
          className={`${
            "flex flex-row justify-start items-center w-full h-full " +
            (SubParentClass ? SubParentClass : "")
          }`}
        >
          <h1
            className={`${
              "mb-6 leading-12 text-6xl h-fit font-bold " +
              (HeaderClass ? HeaderClass : "")
            }`}
          >
            {name}
            <span className="text-[rgb(104_154_248)] text-5xl leading-8 align-sub ml-2 mt-4">
              +
            </span>
          </h1>
        </div>
      )}
      <div
        className={`${
          "flex flex-row justify-start items-center w-full h-full" +
          (ChildrenClass ? ChildrenClass : "")
        }`}
      >
        {children}
      </div>
    </div>
  );
};
