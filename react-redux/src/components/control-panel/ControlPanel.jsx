import { useDispatch } from "react-redux";
import { changeUserAsync } from "../../actions/change-user";
import { increaseAge } from "../../actions/increase-age";
import { RESET_AGE } from "../../actions/reset-age";

export const ControlPanel = () => {
  const dispatch = useDispatch();
  const onAgeIncrease = () => {
    dispatch(increaseAge(3));
  };
  const onAgeReset = () => {
    dispatch(RESET_AGE);
  };

  const onUserChange = () => {
    dispatch(changeUserAsync);
  };
  return (
    <div>
      <button onClick={onAgeIncrease}>Увеличить Возраст:</button>
      <button onClick={onAgeReset}>Сбросить Возраст:</button>
      <button onClick={onUserChange}>Изменить Пользователя</button>
    </div>
  );
};
