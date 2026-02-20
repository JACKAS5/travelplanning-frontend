import { useState } from "react";
import Button from "../../components/ui/Button";

const EditProfile: React.FC = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <form className="max-w-lg space-y-5" onSubmit={handleSave}>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Edit Profile</h1>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)}
          className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full py-3">Save Changes</Button>
    </form>
  );
};

export default EditProfile;
