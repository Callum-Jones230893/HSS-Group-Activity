import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="max-w-9/10">
      <h1>⚓</h1>
      <h1>404</h1>
      <h2>We’ve drifted off course</h2>

      <p>This page isn’t on our charts. It may have been moved, or never mapped in the first place.</p>

      <p>Let’s set a new course back home.</p>

      <Button content="Return to harbour" size="large" type="redirect" redirect="/" url="" />
    </div>
  );
};

export default NotFound;
