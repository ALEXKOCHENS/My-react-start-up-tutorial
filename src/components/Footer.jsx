const Footer = () => {
  const name = "Alex Kochens";
  const date = new Date();
  return (
    <>
      <h1>This is My Footer Component</h1>
      <p>It has been created by {name}</p>
      <p>Today which is:{date.toLocaleDateString()}</p>
    </>
  );
};

export default Footer;
