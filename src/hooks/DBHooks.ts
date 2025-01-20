import { useEffect } from "react";

const useDB = () => {
    useEffect(() => {
        try {
        } catch (error) {
            console.error("Error loading models:", error);
        }
    }, []);
};