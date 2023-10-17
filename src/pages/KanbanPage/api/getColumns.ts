import { pb } from '@/shared/api/pocketbase';

export async function getColumns() {
  return pb.collection('columns').getFullList();
}
