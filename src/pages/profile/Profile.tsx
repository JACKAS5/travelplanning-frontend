import ProfileCard from "../../components/profile/ProfileCard";
import { HiUser, HiCalendar, HiHeart } from "react-icons/hi";

const Profile: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Profile Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileCard title="Personal Info" description="View and update your info" icon={<HiUser />} />
        <ProfileCard title="Booking History" description="View past trips" icon={<HiCalendar />} />
        <ProfileCard title="Favorites" description="Your favorite destinations" icon={<HiHeart />} />
      </div>
    </div>
  );
};

export default Profile;
