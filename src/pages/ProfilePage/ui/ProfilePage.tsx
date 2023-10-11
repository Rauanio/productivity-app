import { pb } from '@/shared/api/pocketbase';
import { Input } from '@/shared/ui';

const ProfilePage = () => {
  const username = pb.authStore.model?.username;
  const email = pb.authStore.model?.email;

  return (
    <div>
      <Input label="Username" readOnly placeholder={username} />
      <Input label="Email" readOnly placeholder={email} />
    </div>
  );
};

export default ProfilePage;
