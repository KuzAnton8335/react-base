import { connect /*useDispatch*/ } from "react-redux";
import { changeUserAsync } from "../../actions/change-user";
import { increaseAge } from "../../actions/increase-age";
import { RESET_AGE } from "../../actions/reset-age";

export const ControlPanelContainer = ({
  onAgeIncrease,
  onAgeReset,
  onUserChange,
}) => {
  // const dispatch = useDispatch();

  return (
    <div>
      <button onClick={onAgeIncrease}>Увеличить Возраст:</button>
      <button onClick={onAgeReset}>Сбросить Возраст:</button>
      <button onClick={onUserChange}>Изменить Пользователя</button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  onAgeIncrease: () => {
    dispatch(increaseAge(3));
  },
  onAgeReset: () => {
    dispatch(RESET_AGE);
  },

  onUserChange: () => {
    dispatch(changeUserAsync);
  },
});

export const ControlPanel = connect(
  null,
  mapDispatchToProps
)(ControlPanelContainer);
