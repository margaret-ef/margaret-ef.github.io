const Button = (props) => {
  switch (props.size) {
    case "submit":
      return (
        <button type="submit">
          <div
            className="bg-primary-500 border-2 border-primary-500 border-solid
              active:border-primary-500 active:bg-neutral-900 active:from-neutral-900 active:to-neutral-900 active:border-solid
              hover:bg-gradient-to-tr hover:from-orange-500 hover:to-primary-500 hover:border-none
              text-white w-29 h-11 rounded-md flex justify-center"
          >
            <div className="flex flex-row justify-between px-6 pt-3 pb-3 self-center">
              <div className="font-overpass text-p1 uppercase">
                {props.name}
              </div>
            </div>
          </div>
        </button>
      );
    case "sm":
      return (
        <div>
          <div
            onClick={props.onClick}
            className="bg-primary-500 border-2 border-primary-500 border-solid
              active:border-primary-500 active:bg-neutral-900 active:from-neutral-900 active:to-neutral-900 active:border-solid
              hover:bg-gradient-to-tr hover:from-orange-500 hover:to-primary-500 hover:border-none
              text-white w-25 md:w-29 h-11 rounded-md flex justify-center"
          >
            <div className="flex flex-row justify-between px-6 pt-3 pb-3 self-center">
              <div className="font-overpass text-p2 md:text-p1 uppercase">
                {props.name}
              </div>
            </div>
          </div>
        </div>
      );
    case "md":
      return (
        <div>
          <div
            onClick={props.onClick}
            className="bg-primary-500 border-2 border-primary-500 border-solid
              active:border-primary-500 active:bg-neutral-900 active:from-neutral-900 active:to-neutral-900 active:border-solid
              hover:bg-gradient-to-tr hover:from-orange-500 hover:to-primary-500 hover:border-none
              text-white w-36 h-12 rounded-md flex justify-center"
          >
            <div className="flex flex-row justify-between px-6 pt-3 pb-3 self-center">
              <div className="font-overpass text-h3s uppercase">
                {props.name}
              </div>
            </div>
          </div>
        </div>
      );
    case "lg":
      return (
        <div>
          <div
            onClick={props.onClick}
            className="bg-primary-500 border-2 border-primary-500 border-solid
              active:border-primary-500 active:bg-neutral-900 active:from-neutral-900 active:to-neutral-900 active:border-solid
              hover:bg-gradient-to-t hover:from-orange-500 hover:to-primary-500
              text-white w-43 h-14 rounded-md flex justify-center"
          >
            <div className="flex flex-row justify-between px-6 pt-3 pb-3 self-center">
              <div className="font-overpass text-h2s uppercase">
                {props.name}
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return;
  }
};

export default Button;
