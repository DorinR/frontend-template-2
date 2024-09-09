import { useGetUserAuthenticationData } from "../../apiHooks/user/useGetUserAuthenticationData";

export const Account = () => {
  const { data: userData } = useGetUserAuthenticationData();

  if (!userData) return null;

  return (
    <div>
      <h2>Account Page</h2>
      <p>Some account information here</p>
      <ul>
        {Object.entries(userData).map(([property, value]) => {
          return <li key={property}>{`${property}: ${value}`}</li>;
        })}
      </ul>
    </div>
  );
};
