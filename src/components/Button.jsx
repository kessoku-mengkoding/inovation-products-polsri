import PropTypes from "prop-types";

export function ButtonPrimary({ children }) {
  return (
    <button className="primaryButton overflow-hidden relative bg-brand uppercase font-medium shadow-lg hover:shadow-none transition-all duration-300 text-xs text-white py-[12px] px-[24px] rounded-[4px] tracking-[2px]">
      <span className="relative z-[2]">{children}</span>
    </button>
  );
}

export function ButtonSecondary({ children }) {
  return (
    <button className="secondaryButton hover:text-white bg-white uppercase shadow-md font-medium overflow-hidden relative text-xs text-brand border border-brand py-[12px] px-[24px] rounded-[4px] transition-all duration-300 tracking-[2px]">
      <span className="relative z-[2]">{children}</span>
    </button>
  );
}

export function ButtonSecondaryS({ children }) {
  return (
    <button className="secondaryButton hover:text-white bg-white uppercase shadow-md font-medium overflow-hidden relative text-xs text-brand border border-brand py-[6px] px-[12px] rounded-[4px] transition-all duration-300 tracking-[2px]">
      <span className="relative z-[2]">{children}</span>
    </button>
  );
}

ButtonPrimary.propTypes = {
  children: PropTypes.node,
};

ButtonSecondary.propTypes = {
  children: PropTypes.node,
};

ButtonSecondaryS.propTypes = {
  children: PropTypes.node,
};
