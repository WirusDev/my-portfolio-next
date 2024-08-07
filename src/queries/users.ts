import { User } from "@/model/user-model";

export async function createUser(user: any) {
  try {
    await User.create(user);
  } catch (e) {
    throw new Error(String(e));
  }
}
