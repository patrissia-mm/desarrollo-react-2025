import useForm from "../Hooks/useForm";

const FormLoginWithHook = ({ titleForm }) => {
  const { formData, handleChange } = useForm({
    username: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); //Evita que la página haga un refresh
    console.log("Datos del formulario", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>{titleForm}</h3>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default FormLoginWithHook;
