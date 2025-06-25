import PropTypes from "prop-types";

const Authentication = ({ pageType }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
        <h3 className="text-xl font-bold">
          {pageType === PageType.LOGIN ? "Login" : "Register"}
        </h3>
      </div>
    </div>
  );
};

export const PageType = Object.freeze({
  LOGIN: 0,
  REGISTER: 1,
});

Authentication.propTypes = {
  pageType: PropTypes.number.isRequired,
};

export default Authentication;
