import React, { useEffect, useState } from 'react';
import { MainContext } from './MainContext';
import { authService } from '../lib/firebaseService';
import type { User } from 'firebase/auth';

export interface MainContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MainProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsub = authService.onAuthStateChanged((usr) => {
            setUser(usr);
            setLoading(false);
        });
        return () => unsub();
    })

    const val = { user, setUser, loading, setLoading };

    return (
        <MainContext.Provider value={val}>
            {children}
        </MainContext.Provider>
    );
}
