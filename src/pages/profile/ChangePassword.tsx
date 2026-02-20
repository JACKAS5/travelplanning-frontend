import { useState } from "react";
import Button from "../../components/ui/Button";

const ChangePassword: React.FC = () => {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPass !== confirm) return alert("Passwords do not match!");
    alert("Password changed!");
  };

  return (
    <form className="max-w-lg space-y-5" onSubmit={handleChange}>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Change Password</h1>
      <input type="password" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="Current Password"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
      <input type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="New Password"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
      <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Confirm Password"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
      <Button type="submit" variant="primary" size="lg" className="w-full py-3">Change Password</Button>
    </form>
  );
};

export default ChangePassword;
