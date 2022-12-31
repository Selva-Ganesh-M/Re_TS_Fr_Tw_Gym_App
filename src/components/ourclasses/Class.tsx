import { DataType } from "@/shared/types";

type Props = {
  data: DataType;
};

const Class = ({ data }: Props) => {
  const { name, description, image } = data;
  return (
    <div className="relative rounded-md p-4">
      <img src={image} alt="class-image" className="rounded-lg" />
      <div className="overcover rounded-lg flex flex-col gap-3 items-center text-center justify-center p-2 absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-[100%] transition-all duration-[800ms] ease-in-out hover:visible hover:duration-300 hover:bg-primary-500">
        <h1 className="text-lg font-bold">bello</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi
          nostrum atque vel tempore obcaecati?
        </p>
      </div>
    </div>
  );
};

export default Class;
