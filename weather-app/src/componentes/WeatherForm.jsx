import { useForm } from "../hook/useForm";

export const WeatherForm = ({ onSearch }) => {

  const {inputValue, onChange, onSubmit} = useForm(onSearch);

  return (
    <form onSubmit={onSubmit}>

    <h2>Buscar País</h2>

      <input
        className="form-input"
        type="search"
        name="search"
        id="input-search"
        placeholder="Introduce la ciudad"
        value={inputValue}
        onChange={onChange}
      />
      <button className="search-button" type="submit">Buscar</button>
    </form>
  );
};
