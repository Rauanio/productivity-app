import { pb } from '@/shared/api/pocketbase';

export async function getTasks() {
  return pb.collection('tasks').getFullList();
}
