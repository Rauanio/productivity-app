import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://productivity-app.pockethost.io');

pb.autoCancellation(false);
