import { useContext, useState } from "react";
import { FormManagerContext } from "./Corescore";
import Button from "./Button";
import { LogoSmall } from "../assets";

const Login = () => {
  const { formData, setFormData, page, setPage } =
    useContext(FormManagerContext);
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "epri" && formData.password === "incubatelabs") {
      setPage(page + 1);
    } else {
      setShowErrors(true);
      return;
    }
    // const value1 = ...;
    // const value2 = ...;

    // const errors = validate(value1, value2, ...);
    // const hasErrors = ...;
    // if (hasErrors) {
    //   // do something with errors
    //   return;
    // }

    // // send the form...
  };

  const Error = (props) => {
    if (showErrors) {
      if (props.input === "") {
        return <div className="text-error italic">Required</div>;
      }
      return (
        <div className="text-error italic">{"Incorrect " + props.name}</div>
      );
    } else {
      return <div className="text-neutral-900 italic"> "."</div>;
    }
  };

  return (
    <div className="flex flex-col gap-7 w-fit self-center pr-10">
      <img className="w-1/6" src={LogoSmall} alt="logo" />
      <div className="font-overpass text-h2 lg:text-h1">CoReScore Login</div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          <div class="flex items-center border-b border-white py-1 w-full">
            <input
              className="text-white font-overpass text-p1 lg:text-h3s outline-none bg-neutral-900 mr-3 py-1 px-2 leading-tight"
              placeholder="USERNAME"
              type="text"
              aria-label="Username"
              value={formData.username}
              onChange={(e) => {
                setShowErrors(false);
                setFormData({ ...formData, username: e.target.value });
              }}
            />
          </div>
          <div className="text-error italic">
            <Error input={formData.username} name="username" />
          </div>
        </label>
        <label>
          <div class="flex items-center border-b border-white py-1 w-full ">
            <input
              className="text-white font-overpass text-p1 lg:text-h3s outline-none bg-neutral-900 mr-3 py-1 px-2 leading-tight"
              placeholder="PASSWORD"
              type="password"
              aria-label="Password"
              value={formData.password}
              onChange={(e) => {
                setShowErrors(false);
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </div>
          <div className="text-error italic">
            <Error input={formData.password} name="password" />
          </div>
        </label>
        <div className="flex justify-end pt-5">
          <Button size="submit" name="Login" />
        </div>
      </form>
    </div>
  );
};
export default Login;
