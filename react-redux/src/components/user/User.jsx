import { useSelector } from "react-redux";
import { selectAge } from "../../selectors/select-age";
import { selectName } from "../../selectors/select-name";

export const User = () => {
  const name = useSelector(selectName);
  const age = useSelector(selectAge);

  return (
    <div>
      <div>Пользователь</div>
      <div>Имя: {name}</div>
      <div>Возраст: {age}</div>
    </div>
  );
};
