import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<UserProps> = ({ posts }: any) => {
  const [User, setUser] = useState<UserData | null>(null);
  const [UserModalOpen, setUserModalOpen] = useState(false);

  const handleAddUser = (newUser: UserProps) => {
    setUser({ ...newUser, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="flex justify-between items-center w-full px-4">
          <h1 className="text-xl font-bold text-white">Users Page</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setUserModalOpen(true)}
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full mt-6">
          {posts.map(
            (
              {
                id,
                name,
                username,
                email,
                phone,
                website,
                address,
                company,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                id={id}
                name={name}
                username={username}
                email={email}
                phone={phone}
                website={website}
                address={address}
                company={company}
                key={key}
              />
            )
          )}
        </div>
        {UserModalOpen && (
          <UserModal
            onClose={() => setUserModalOpen(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
