import { computed } from '@angular/core';
import { signalStore, withComputed, withState} from '@ngrx/signals'

interface UserState {
   userName: string;
   email: string;
}
export const UserStore = signalStore(
    { providedIn: 'root' },
    withState<UserState>({
        userName: '',
        email: ''
    }),
    withComputed((store) => {
        const isGoogleUser = computed(() => store.email().endsWith('@google.com'));
    
        return { isGoogleUser}
    })
);