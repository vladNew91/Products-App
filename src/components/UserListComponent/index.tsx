import { User } from "../../types";

interface UserListComponentProps {
  userList: User[];
}

export const UserListComponent: React.FC<UserListComponentProps> = ({
  userList,
}: UserListComponentProps): JSX.Element => {
  return (
    <ul>
      {userList.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
};
