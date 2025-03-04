import { connect /*useSelector*/ } from "react-redux";
import { selectAge } from "../../selectors/select-age";
import { selectName } from "../../selectors/select-name";

export const UserContainer = ({ name, age }) => {
  // const name = useSelector(selectName);
  // const age = useSelector(selectAge);

  return (
    <div>
      <div>Пользователь</div>
      <div>Имя: {name}</div>
      <div>Возраст: {age}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.userState.name,
  age: state.userState.age,
});

export const User = connect(mapStateToProps)(UserContainer);
