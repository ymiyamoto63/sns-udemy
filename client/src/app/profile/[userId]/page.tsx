import ProfilePage from "./profile-page";

// TODO: propsの型指定
const page = (props: any) => {
  const { userId } = props.params;
  return <ProfilePage userId={userId}></ProfilePage>;
};

export default page;
