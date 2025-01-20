import { useEffect } from "react";
import Loki from "lokijs";

const useDB = () => {
    useEffect(() => {
        try {
            const dbInstance = new Loki('face.json');
            // Load the database i it exists
            dbInstance.loadDatabase({}, () => {
                const collection = dbInstance.getCollection('faces');
                if (!collection) {
                    dbInstance.addCollection('faces');
                }
            });
        } catch (error) {
            console.error("useDB error:", error);
        }
    }, []);
};