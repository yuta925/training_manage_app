"use client";
import { createContext, useState, type ReactNode } from "react";

// SidebarContextの型定義
interface SidebarContextProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Contextの初期値
export const SidebarContext = createContext<SidebarContextProps>({
	isOpen: true,
	setIsOpen: () => {},
});

// Providerの作成
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</SidebarContext.Provider>
	);
};
