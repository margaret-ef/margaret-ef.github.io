import { useContext, useState } from "react";
import { FormManagerContext } from "./Corescore";
import Button from "./Button";

const Info = () => {
  const { formData, setFormData, page, setPage } =
    useContext(FormManagerContext);
  const [showErrors, setShowErrors] = useState(false);

  return (
    <div className="flex flex-col w-fit self-center pr-5 lg:pr-10">
      <div className="font-overpass text-h2 lg:text-h1 pb-5">
        Select a Metric
      </div>
      <div className="w-5/6 md:w-full flex flex-col gap-5">
        <div className="font-barlow text-p2 lg:text-p1">
          CoReScore™ is a siting algorithm that uses data from electrical grid
          local power capacity, vehicle trip-to-trip data, and user demographics
          to choose the most impactful locations to build distributed storage.{" "}
        </div>
        <div className="font-barlow text-p2 lg:text-p1">
          Our approach considers hosting capacity, consumer behavior, and
          technical challenges for building a new generation of the electrical
          grid–the biggest change our energy infrastructure will see since the
          advent of AC electricity over DC in the last century.{" "}
        </div>
      </div>

      <div className="flex flex-row justify-between pt-10">
        <Button
          size="sm"
          name="Equity"
          onClick={() => {
            window.open("https://margaret-ef.github.io/corescoreDemo/");
          }}
        />
        <Button
          size="sm"
          name="Electrical"
          onClick={() =>
            window.open("https://margaret-ef.github.io/corescoreDemo/")
          }
        />
        <Button
          size="sm"
          name="Both"
          onClick={() =>
            window.open("https://margaret-ef.github.io/corescoreDemo/")
          }
        />
      </div>
    </div>
  );
};
export default Info;
