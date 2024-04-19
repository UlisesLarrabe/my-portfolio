const Badge = ({ children, colors }) => {
  return (
    <span className={"text-sm font-medium me-2 px-2.5 py-0.5 rounded" + colors}>
      {children}
    </span>
  );
};
export default Badge;
