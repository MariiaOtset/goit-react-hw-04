// import css from "./Loader.module.css";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="light-green"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
