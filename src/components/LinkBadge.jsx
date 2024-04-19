const LinkBadge = ({ children, to, classInfo }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener"
      className={"hover:scale-105 transition-transform " + classInfo}
    >
      {children}
    </a>
  );
};
export default LinkBadge;
