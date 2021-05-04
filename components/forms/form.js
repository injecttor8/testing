export class FormOptions {
  onSubmit= () => void{};
  children;
}

const Form = ({ onSubmit, children }, FormOptions) => {
  return (
    <div className="px-4 py-5 sm:p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (onSubmit) onSubmit();
        }}
      >
        {children}
      </form>
    </div>
  );
};

export default Form;
