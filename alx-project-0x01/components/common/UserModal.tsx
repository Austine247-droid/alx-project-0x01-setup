import { UserModalProps, UserData } from "@/interfaces";
import { useState } from "react";

const UserModal = ({ onClose, handleAddUser }: UserModalProps) => {
  const [User, setUser] = useState<UserData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });
  const [userId, setUserId] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  }>({
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: { lat: "", lng: "" },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., API call to add user
    console.log({
      userId,
      name,
      username,
      email,
      address,
    });

    handleAddUser(User);
    onClose(); // Close the modal after submission

    // const newUser: UserData = {
    //   id: userId, // Assuming userId is unique and can be used as ID
    //   name,
    //   username,
    //   email,
    //   address,
    //   phone: "", // Placeholder, replace with actual logic if needed
    //   website: "", // Placeholder, replace with actual logic if needed
    //   company: {
    //     name: "", // Placeholder, replace with actual logic if needed
    //     catchPhrase: "", // Placeholder, replace with actual logic if needed
    //     bs: "", // Placeholder, replace with actual logic if needed
    //   },
    // };
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="font-bold text-2xl text-gray-800 mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-gray-700 font-medium mb-2"
            >
              User ID
            </label>
            <input
              type="text"
              id="userId"
              placeholder="Enter user ID"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userId} // Placeholder value, replace with actual logic
              onChange={(e) => setUserId(Number(e.target.value))}
            />
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter user name"
                value={name} // Placeholder value, replace with actual logic
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter user name"
                value={username} // Placeholder value, replace with actual logic
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter user email"
                value={email} // Placeholder value, replace with actual logic
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-medium mb-2"
              >
                Address
              </label>
              <input
                type="address"
                id="address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter user address"
                value={address.street} // Placeholder value, replace with actual logic
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                } // Update address state
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={onClose} // Close the modal without submitting
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Add Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
