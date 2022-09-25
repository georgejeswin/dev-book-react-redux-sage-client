const Background = ({ children }: any) => {
  return (
    <body className="bg-lbg_screen dark:bg-dbg_navbar transition-all">
      {children}
    </body>
  );
};

export default Background;
