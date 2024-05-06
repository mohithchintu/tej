import fapp from "../components/firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(fapp);

export default async function signIn(email: string, password: string): Promise<{ result: any | null, error: any | null }>  {
    let result: any | null = null,
        error: any | null = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
        error = e;
    }

    return { result, error };
}