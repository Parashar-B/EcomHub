export default function Breadcrumb(props) {
    return (
      <div className="pt-[2rem] w-full">
        <h3 className="text-[15px] font-semibold pb-[1rem]">
          Home{props.relativePath}
        </h3>
      </div>
    );
  }
  