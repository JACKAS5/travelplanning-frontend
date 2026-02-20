type ProfileCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ title, description, icon }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex items-center gap-4">
      {icon && <div className="text-indigo-500">{icon}</div>}
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
